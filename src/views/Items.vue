<template lang="pug">
  v-app
    v-toolbar(app flat dark dense)
      v-btn(icon to="/"): v-icon arrow_back_ios
      v-toolbar-title.text-xs-center 道具
      v-spacer
      v-btn(icon): v-icon add
    v-content
      v-list
        div(v-for="(item, n) in items")
          v-list-tile
            v-list-tile-avatar(tile)
              v-btn(fab dark small color="grey") {{ n + 1 }}
            v-list-tile-content.ml-2
              v-list-tile-title {{ item.name }}
              v-list-tile-sub-title {{ item.memo }}
            v-list-tile-action
              v-icon keyboard_arrow_right
          v-divider
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
