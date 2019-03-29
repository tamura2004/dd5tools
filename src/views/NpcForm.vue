<template lang="pug">
v-layout(row wrap)
  v-flex(xs12 sm8 md4 lg 2)
    v-card
      v-img(
        :src="imageData"
        v-if="imageData"
      )
      v-card-title.headline bigstring
      v-card-actions
        label(for="upload")
          input#upload(
            ref="input"
            type="file"
            accept="image/*"
            @change="select()"
          )
      v-divider
      v-card-actions
        v-spacer
        v-btn(color="primary") 保存
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import firebase from 'firebase/app';

@Component
export default class NpcForm extends Vue {
  public $refs!: {
    input: HTMLInputElement,
  };

  private imageData: any = null;

  private select() {
    const { files } = this.$refs.input;
    if (files === null) {
      return;
    }

    const file = files[0];
    if (file === null) {
      return;
    }

    const reader = new FileReader();
    reader.onload = (e: FileReaderProgressEvent) => {
      const { target } = e;
      if (target === null) {
        return;
      }
      this.imageData = target.result;
    };
    reader.readAsDataURL(file);

    //
    // const storageRef = firebase.storage().ref();
    // const imageRef = storageRef.child(file.name);
    // imageRef.put(file).then((snapshot) => alert(snapshot));
  }

  private upload(e: any) {
    alert('ok');
  }
}
</script>

<style lang="stylus">
</style>
