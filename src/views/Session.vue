<template lang="pug">
  .headline(v-if="available") Session # {{ sessionId }}
    table
      tr
        th.label.body-2 セッション名
        td.body-2 {{ session.name }}
      tr
        th.label.body-2 場所
        td.body-2 {{ dungeon(session.dungeonId).name }}
      tr
        th.label.body-2 依頼人
        td.body-2 {{ npc.name }}
      tr
        th.label.body-2 目的
        td.body-2 {{ session.purpose }}
      tr
        th.label.body-2 条件
        td.body-2 {{ session.limit }}
      tr
        th.label.body-2 報酬
        td.body-2 {{ session.reward }}gp

    v-tabs
      v-tab(:to="{ name: 'session/players' }") ＰＣ
      v-tab(:to="{ name: 'session/encounters' }") 遭遇
      v-tab(:to="{ name: 'session/reward' }") 報酬
    router-view
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { mapState, mapGetters } from 'vuex';
import SessionModel from '@/models/Session';

@Component({
  computed: {
    ...mapGetters(['dungeon']),
  },
})
export default class Session extends Vue {
  @Prop() private sessionId!: string;

  private get available(): boolean {
    return this.session !== undefined && this.npc !== undefined;
  }

  private get session(): SessionModel {
    return this.$store.state.sessions.get(this.sessionId);
  }
  private get npc() {
    return this.$store.state.npcs.get(this.session.npcId);
  }
}
</script>

<style lang="stylus">
table
  width 100%
  border solid 1px grey
  border-collapse collapse

tr
  height 32px

td
  border solid 1px grey
  padding 0 4px

th
  border solid 1px grey

th.label
  text-align center
  background-color #212121
  color white

td.number
  text-align center
  width 32px
</style>
