<template lang="pug">
v-form(v-model="valid" v-if="form")
  v-card(width="320px")
    v-card-actions
      label(for="upload")
        input#upload(
          ref="input"
          type="file"
          accept="image/*"
          @change="fileChangeHandler()"
        )
    canvas(
      ref="canvas"
      width="320px"
      height="180px"
    )
    v-img(
      ref="img"
      width="320px"
      height="180px"
      :src="`https://storage.googleapis.com/dd5tools.appspot.com/images/${npcId}.png`"
    )
    v-text-field.pa-2(
      label="名前"
      v-model="form.name"
      :rules="required"
    )
    v-textarea.pa-2(
      label="説明"
      :value="form.description"
      :rules="required"
    )
    v-card-actions
      v-spacer
      v-btn(
        color="error"
        @click="deleteHandler"
      ) 削除
      v-btn(
        color="primary"
        @click="uploadHandler"
      ) 保存
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import firebase from 'firebase/app';
import 'firebase/storage';
import Npc from '@/models/Npc';
import { UPDATE, DELETE, DELETE_IMAGE, PUT_IMAGE, TO_BLOB } from '@/types/ActionTypes';

const WIDTH = 320;
const HEIGHT = 180;
const RATIO = WIDTH / HEIGHT;

type Validation = (v: string) => boolean | string;

@Component
export default class NpcEdit extends Vue {
  @Prop() public npcId!: string;

  public $refs!: {
    input: HTMLInputElement;
    name: any;
    description: any;
    canvas: HTMLCanvasElement;
  };
  private form: Form<Npc> = Npc.form();
  private file: File | null = null;
  private valid: boolean = false;
  private required: Validation[] = [(v) => !!v || '必須項目です'];

  private get npc(): Npc | undefined {
    return this.$store.getters.npc(this.npcId);
  }

  private get canvas(): HTMLCanvasElement {
    return this.$refs.canvas;
  }

  private created() {
    if (this.npc) {
      Object.assign(this.form, this.npc);
    }
  }

  private fileChangeHandler() {
    const { files } = this.$refs.input;
    if (files === null) {
      return;
    }

    this.file = files[0];
    if (this.file === null) {
      return;
    }

    const reader = new FileReader();
    const image = new Image();
    // image.crossOrigin = "anonymous";
    reader.onload = (e: any) => {
      image.onload = () => {
        const dpr = window.devicePixelRatio || 1; // device pixel ratio
        const ctx = this.canvas.getContext('2d');
        if (ctx === null) {
          return;
        }
        // ctx.scale(dpr, dpr);
        ctx.clearRect(0, 0, WIDTH, HEIGHT);

        const ratio = image.width / image.height;
        if (ratio < RATIO) {
          // 画像が縦長
          ctx.drawImage(
            image,
            0,
            (image.height - image.width / RATIO) / 2,
            image.width,
            image.width / RATIO,
            0,
            0,
            WIDTH,
            HEIGHT,
          );
        } else {
          // 画像が横長
          ctx.drawImage(
            image,
            (image.width - image.height * RATIO) / 2,
            0,
            image.height * RATIO,
            image.height,
            0,
            0,
            WIDTH,
            HEIGHT,
          );
        }
      };
      const { target } = e;
      if (target === null) {
        return;
      }
      image.src = target.result;
    };
    reader.readAsDataURL(this.file);
  }

  private async uploadHandler() {
    if (!Npc.valid(this.form)) {
      alert('不正な入力です');
      return;
    }
    this.$root.$data.processing = true;
    await this.$store.dispatch(UPDATE, {
      collectionName: 'npcs',
      id: this.npcId,
      updates: this.form,
    });
    const blob = await this.$store.dispatch(TO_BLOB, {
      canvas: this.canvas,
    });
    await this.$store.dispatch(PUT_IMAGE, {
      id: this.npcId,
    });
    this.$root.$data.processing = false;
    this.$router.push('/npcs');
  }

  private async deleteHandler() {
    const ok = confirm(`${this.form.name}を削除してよろしいですか`);
    if (!ok) {
      return;
    }
    this.$root.$data.processing = true;
    await this.$store.dispatch(DELETE, {
      collectionName: 'npcs',
      id: this.npcId,
    });
    await this.$store.dispatch(DELETE_IMAGE, {
      id: this.npcId,
    });
    this.$router.push('/npcs');
    this.$root.$data.processing = false;
  }
}
</script>

<style lang="stylus">
canvas {
  border: grey 1px solid;
}
</style>
