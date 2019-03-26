<template lang="pug">
  .headline NPC
    v-btn(block)
      input(
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
      }
      reader.readAsDataURL(file);
    }
  }
  private upload(e: any) {
  }
}
</script>
