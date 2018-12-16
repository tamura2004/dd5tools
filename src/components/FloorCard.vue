<template lang="pug">
  v-card.ma-4.elevation-12
    v-toolbar(dark :class="color")
      h1.mb-0 {{ floor.name }}
    v-card-text
      div {{ floor.description }}
    v-card-actions
      v-spacer
      v-btn.blue.darken-2(dark @click="inspect") 調べる
      v-btn.blue.darken-2(dark @click="go") 進む
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Floor from '@/models/Floor.vue';

@Component
export default class FloorCard extends Vue {
  @Prop() private floor!: Floor;

  private color: string = "blue darken-2";

  private go(): void {
    this.$store.commit('nextFloor', this.floor);
  }

  private inspect(): void {
    this.color = this.color === "red" ? "blue darken-2" : "red";
  }
}
</script>

<style lang="stylus">
</style>