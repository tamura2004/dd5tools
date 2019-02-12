<template lang="pug">
  v-app
    v-toolbar(app flat dark dense)
      v-btn(icon to="/"): v-icon arrow_back_ios
      v-toolbar-title.text-xs-center ダンジョン
      v-spacer
      v-btn(icon): v-icon add
    v-content
      v-list(two-line)
        div(v-for="(dungeon, n) in dungeons")
          v-list-tile
            v-list-tile-avatar(tile)
              v-btn(fab dark small color="grey") {{ n }}
            v-list-tile-content.ml-2
              v-list-tile-title {{ dungeon.name }}
              v-list-tile-sub-title {{ dungeon.memo }}
            v-list-tile-action
              v-icon keyboard_arrow_right
          v-divider
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class Dungeons extends Vue {
    private dungeons = [
      {
        name: '峠のダンジョン',
        memo: '鉱山村に行く抜け道。恐竜が出没する',
      },
      {
        name: '遺跡のダンジョン',
        memo: '魔人象のある部屋。オーガが住み着いていた。',
      },
      {
        name: '樹上のダンジョン',
        memo: 'ゴルゴン熱の特効薬の材料、銀蛇イチゴが採れる。',
      },
    ];
    private newDungeon(): void {
      this.$router.push('/dungeonForm/newDungeon');
    }
  }
</script>

<style lang="stylus" scoped>
</style>
