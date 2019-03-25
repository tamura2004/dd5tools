<template lang="pug">
  .headline(v-if="encounter(encounterId)")
    table
      tr
        th(xs4).label.body-2 セッション
        td(xs8).body-2
          router-link(:to="`/session/${sessionId}/encounters`") {{ session(sessionId).name }}
      tr
        th(xs4).label.body-2 場所
        td(xs8).body-2 {{ encounter(encounterId).room }}
      tr
        th.label.body-2 トラップ
        td.body-2 {{ encounter(encounterId).trap }}
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

@Component({
  computed: {
    ...mapGetters(['encounter', 'session']),
  },
})
export default class Encounter extends Vue {
  @Prop() public sessionId!: string;
  @Prop() public encounterId!: string;
}
</script>

<style lang="stylus">
.label
  width 20%
td.body-2
  line-height 24px
</style>
