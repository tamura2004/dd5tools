<template lang="pug">
  div
    v-list-tile
      v-list-tile-avatar 困難
      v-list-tile-content {{ monsterName }}
      v-list-tile-action
        v-btn(flat) 遭遇

</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class MonsterList extends Vue {
  @Prop() row!: number;

  private get monsterName(): string {
    const MONSTERS = [
      'コボルド',
      'ゴブリン',
      'オーク',
      'オーガ',
      'トロール',
      'ジャイアント',
    ]
    return MONSTERS[this.row] || 'タイタン';
  }
}
</script>

<style lang="stylus">
</style>
