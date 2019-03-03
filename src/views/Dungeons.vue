<template lang="pug">
  v-app
    v-toolbar(app)
      v-btn(icon to="/"): v-icon clear
      v-toolbar-title.text-xs-center ダンジョン
      v-spacer
      v-btn(icon @click="extended = !extended"): v-icon search
      v-btn(icon to="/"): v-icon add
    v-toolbar(v-show="extended")
      v-btn(icon): v-icon clear
      v-toolbar-title two
    v-content
      v-container(:fluid="!$vuetify.breakpoint.xsOnly")
        v-list(two-line)
          div(v-for="(dungeon, n) in dungeons")
            v-list-tile.my-1.elevation-4
              v-list-tile-avater(tile)
                v-btn(fab dark small color="grey") {{ n }}
              v-list-tile-content.ml-2
                v-list-tile-title {{ dungeon.name }}
                v-list-tile-sub-title {{ dungeon.memo }}
              v-list-actions
                v-icon keyboard_arrow_right
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class Dungeons extends Vue {
    private extended: boolean = false;
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
