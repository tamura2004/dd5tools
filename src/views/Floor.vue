<template lang="pug">
  v-container(grid-list-md)
    v-layout(row wrap)
      v-flex(v-for="(tile, n) in tiles" :key="n" xs3)
        v-card.tile(flat tile :color="color(tile)" style="height: 72px")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

function d(n: number): number {
  return Math.floor(Math.random() * n);
}

@Component
export default class Floor extends Vue {
  private tiles: boolean[] = [];

  private color(tile: boolean): string {
    return tile ? 'blue lighten-2' : 'grey';
  }

  private created(): void {
    const WIDTH = 4;
    const HEIGHT = 6;
    const LENGTH = WIDTH * HEIGHT;
    const TIMES = 3;

    for (let i = 0; i < LENGTH; i++) {
      this.tiles.push(true);
    }

    const DIR = [-WIDTH, -1, 1, WIDTH];
    let count = 0;
    while (count < TIMES) {
      const p = d(LENGTH);
      const q = p + DIR[d(4)];
      if (0 <= q && q < LENGTH && this.tiles[p] && this.tiles[q]) {
        this.tiles[p] = false;
        this.tiles[q] = false;
        count++;
      }
    }
  }
}
</script>

<style lang="stylus">
</style>
