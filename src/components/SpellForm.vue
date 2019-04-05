<template lang="pug">
v-form(v-model="valid" v-if="form")
  v-card(width="320px")
    v-canvas(
      :id="id"
      width="320"
      height="480"
      @fileChange="fileChangeHandler"

    )
    v-text-field.pa-2(
      label="名前"
      v-model="form.name"
      :rules="required"
    )
    v-text-field.pa-2(
      label="レベル"
      v-model.number="form.level"
      :rules="required"
    )
    v-text-field.pa-2(
      label="クラス"
      v-model="form.klass"
      :rules="required"
    )
    v-textarea.pa-2(
      label="説明"
      v-model="form.description"
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
import firebase from 'firebase/app';
import 'firebase/storage';
import { Component, Vue, Prop } from 'vue-property-decorator';
import { CREATE, TO_BLOB, PUT_IMAGE } from '@/types/ActionTypes';
import Spell from '@/models/Spell';
import VCanvas from '@/components/VCanvas.vue';

type Validation = (v: string) => boolean | string;

@Component({
  components: {
    VCanvas,
  },
})
export default class SpellForm extends Vue {
  @Prop() private deletable?: boolean;
  @Prop() private init?: Form<Spell>;
  @Prop() private id?: string;

  private form: Form<Spell> = Spell.form();
  private valid: boolean = false;
  private required: Validation[] = [(v) => !!v || '必須項目です'];
  private canvas: HTMLCanvasElement | null = null;

  private created() {
    if (this.init === undefined) {
      this.form = Spell.form();
    } else {
      Object.assign(this.form, this.init);
    }
  }

  private fileChangeHandler(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
  }

  private uploadHandler() {
    if (!Spell.valid(this.form)) {
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
</style>
