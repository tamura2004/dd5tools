<template lang="pug">
  .headline NPC
    .label
      input#upload(
        type="file"
        accept="image/*"
        @change="select($event)"
      )
    v-img(
      :src="imageData"
      v-if="imageData"
    )
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import firebase from 'firebase/app';

@Component
export default class NpcForm extends Vue {
  private imageData: any = null;

  private select(event: any) {
    const files = event.target.files;
    if (files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageData = e.target.result;
      };
      reader.readAsDataURL(file);

      //
      const storageRef = firebase.storage().ref();
      const imageRef = storageRef.child(file.name);
      imageRef.put(file).then((snapshot) => alert(snapshot));
    }
  }
  private upload(e: any) {
    alert('ok');
  }
}
</script>

<style lang="stylus">
.label
  border 1px solid black
  width 100px
  height 100px

#upload
  opacity 0
  width 100%
  height 100%
  cursor pointer
</style>