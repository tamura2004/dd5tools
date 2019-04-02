<template lang="pug">
v-form(v-model="valid" v-if="form")
  v-card(width="320px")
    v-card-actions
      label(for="upload")
        input#upload(
          ref="input"
          type="file"
          accept="image/*"
          @change="fileChangeHandler"
        )
    canvas(
      ref="canvas"
      width="320px"
      height="180px"
    )
    v-text-field.pa-2(
      label="名前"
      v-model="form.name"
      :rules="required"
    )
    v-textarea.pa-2(
      label="説明"
      v-model="form.description"
      :rules="required"
    )
    v-card-actions
      v-spacer
      v-btn(
        v-if="deletable"
        color="error"
        @click="deleteHandler"
      ) 削除
      v-btn(
        color="primary"
        @click="uploadHandler"
      ) 保存
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import firebase from 'firebase/app';
import 'firebase/storage';
import Npc from '@/models/Npc';
import { CREATE, TO_BLOB, PUT_IMAGE } from '@/types/ActionTypes';

const WIDTH = 320;
const HEIGHT = 180;
const RATIO = WIDTH / HEIGHT;

type Validation = (v: string) => boolean | string;

@Component
export default class NpcForm extends Vue {
  public $refs!: {
    input: HTMLInputElement;
    canvas: HTMLCanvasElement;
  };

  @Prop() private deletable?: boolean;
  @Prop() private init?: Form<Npc>;
  @Prop() private id?: string;

  private form: Form<Npc> = Npc.form();
  private file: File | null = null;
  private valid: boolean = false;
  private required: Validation[] = [(v) => !!v || '必須項目です'];

  private created() {
    if (this.init === undefined) {
      this.form = Npc.form();
    } else {
      Object.assign(this.form, this.init);
    }

    if (this.id === undefined) {
      return;
    }

    // edit
    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.onload = () => {
      const ctx = this.canvas.getContext('2d');
      if (ctx === null) {
        return;
      }
      ctx.clearRect(0, 0, WIDTH, HEIGHT);
      ctx.drawImage(image, 0, 0);
    };
    image.src = `https://storage.googleapis.com/dd5tools.appspot.com/images/${this.id}.png`;
  }

  private get canvas(): HTMLCanvasElement {
    return this.$refs.canvas;
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
    reader.onload = (e: any) => {
      image.onload = () => {
        const ctx = this.canvas.getContext('2d');
        if (ctx === null) {
          return;
        }
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

  private uploadHandler() {
    if (!Npc.valid(this.form)) {
      alert('不正な入力です');
      return;
    }
    this.$emit('upload', {
      canvas: this.canvas,
      form: this.form,
    });
  }

  private deleteHandler() {
    const ok = confirm(`${this.form && this.form.name}を削除してよろしいですか`);
    if (!ok) {
      return;
    }
    this.$emit('delete');
  }
}
</script>

<style lang="stylus">
canvas {
  border: grey 1px solid;
}
</style>
