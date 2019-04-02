<template lang="pug">
div
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
</template>

<script lang="ts">
import firebase from 'firebase/app';
import 'firebase/storage';
import { Component, Vue, Prop } from 'vue-property-decorator';

const WIDTH = 320;
const HEIGHT = 180;
const RATIO = WIDTH / HEIGHT;

@Component
export default class VCanvas extends Vue {
  public $refs!: {
    input: HTMLInputElement;
    canvas: HTMLCanvasElement;
  };

  @Prop() private id?: string;

  private file: File | null = null;

  private get canvas(): HTMLCanvasElement {
    return this.$refs.canvas;
  }

  private async created() {
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
    const storage = firebase.storage();
    const ref = storage.ref(`images/${this.id}.png`);
    const url = await ref.getDownloadURL();
    image.src = url;
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
}
</script>

<style lang="stylus">
canvas {
  border: grey 1px solid;
}
</style>
