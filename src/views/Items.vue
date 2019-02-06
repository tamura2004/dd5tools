<template lang="pug">
  v-app
    v-toolbar
      v-btn(icon to="/"): v-icon clear
      v-toolbar-title.text-xs-center 道具
      v-btn(absolute dark fab bottom small right color="red")
        v-icon add
    v-list(two-line)
      div(v-for="(item, n) in items")
        v-list-tile.my-1.elevation-4
          v-list-tile-avatar(tile)
            v-btn(fab dark small color="grey") {{ n + 1 }}
          v-list-tile-content.ml-2
            v-list-tile-title {{ item.name }}
            v-list-tile-sub-title {{ item.memo }}
          v-list-tile-action
            v-icon keyboard_arrow_right
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class Items extends Vue {
    private items = [
      {
        name: 'ファイアブレスポーション',
        memo: '口から火を吐く',
      },
      {
        name: 'キオートムズ・オイントメント',
        memo: '塗ると病気と怪我が治る軟膏',
      },
    ];
  }
</script>

<style lang="stylus" scoped>
</style>
