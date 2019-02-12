<template lang="pug">
  v-app
    v-toolbar(app flat dark dense)
      v-btn(icon to="/"): v-icon arrow_back_ios
      v-toolbar-title.text-xs-center ＮＰＣ
      v-spacer
      v-btn(icon): v-icon add
    v-content
      v-list(two-line)
        div(v-for="(npc, n) in npcs")
          v-list-tile
            v-list-tile-avatar(tile)
              v-btn(fab dark small color="grey") {{ n + 1 }}
            v-list-tile-content.ml-2
              v-list-tile-title {{ npc.name }}
              v-list-tile-sub-title {{ npc.memo }}
            v-list-tile-action
              v-icon keyboard_arrow_right
          v-divider
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class Npcs extends Vue {
    private npcs = [
      {
        name: '行商人 ジョン',
        memo: '鉱山村から炎熱石を運ぶ商人',
      },
      {
        name: 'ニポポ婆さん',
        memo: '腕のより薬師。キートムズ・オイントメントを作れる',
      },
    ];
  }
</script>

<style lang="stylus" scoped>
</style>
