<template lang="pug">
  .headline(v-if="dungeon(dungeonId)")
    table
      tr
        th.label.body-2 ダンジョン
        td.body-2 {{ dungeon(dungeonId).name }}
      tr
        th.label.body-2 説明
        td.body-2 {{ dungeon(dungeonId).description }}
    v-tabs
      v-tab(to="sessions") セッション
      v-tab(:to="`/dungeon/${dungeonId}/edit`") 編集
    router-view

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { mapState, mapGetters } from 'vuex';
import Dungeon from '@/models/Dungeon';

@Component({
  computed: {
    ...mapGetters(['dungeon']),
  },
})
export default class DungeonShow extends Vue {
  @Prop() private dungeonId!: string;
}
</script>

<style lang="stylus">
th.label
  text-align center
  width 48px
  background-color #212121
  color white
  width 15%
td.body-2
  line-height 24px
</style>
