<template lang="pug">
  .headline(v-if="encounter")
    table
      tr
        th(xs4).label.body-2 セッション
        td(xs8).body-2
          router-link(:to="`/session/${sessionId}/encounters`") {{ session.name }}
      tr
        th(xs4).label.body-2 場所
        td(xs8).body-2 {{ encounter.room }}
      tr
        th.label.body-2 トラップ
        td.body-2 {{ encounter.trap }}
      tr
        th.label.body-2 アイテム
        td.body-2 {{ encounter.itemDescription }}
      tr
        th.label.body-2 金貨
        td.body-2 {{ encounter.goldDescription }}
    v-tabs
      v-tab(to="battle") 戦闘
      v-tab(to="monster") モンスター
      v-tab(to="reward") 報酬
      v-tab(to="rest") 休憩
    router-view
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import { listen } from '@/plugins/firebase';
import Session from '@/models/Session';
import Encounter from '@/models/Encounter';

@Component
export default class EncounterShow extends Vue {
  @Prop() public sessionId!: string;
  @Prop() public encounterId!: string;

  private unsubscribe: any;

  private created() {
    this.unsubscribe = listen<Encounter>(Encounter, 'sessionId', this.sessionId);
  }

  private destroyed() {
    this.unsubscribe();
  }

  private get session(): Session {
    return this.$store.getters.session(this.sessionId);
  }
  private get encounter(): Encounter {
    return this.$store.getters.encounter(this.encounterId);
  }
}
</script>

<style lang="stylus">
.label
  width 20%
td.body-2
  line-height 24px
</style>
