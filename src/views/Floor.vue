<template lang="pug">
  v-container(grid-list-md)
    v-layout(row wrap)
      v-flex(v-for="(tile, n) in tiles" :key="n" xs3)
        v-card.tile(flat tile :color="color(tile)" style="height: 72px")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Floor extends Vue {
  private tiles: boolean[] = [];

  private color(tile: boolean): string {
    return tile ? 'blue lighten-2' : 'grey';
  }

  private created(): void {
    for (let i = 0; i < 24; i++) {
      this.tiles.push(false);
    }
    this.tiles[10] = true;
    this.tiles[11] = true;
  }
}
</script>

<style lang="stylus">
</style>
