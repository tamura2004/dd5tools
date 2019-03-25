<template lang="pug">
.headline.mt-4 遭遇一覧
  v-list(two-line)
    template(v-for="[encounterId, encounter] in Array.from(encounters(sessionId))")
      v-list-tile(@click="go(encounterId)")
        v-list-tile-avatar
          v-btn.font-weight-bold(fab small outline color="black") {{ encounter.level }}
        v-list-tile-content
          v-list-tile-title {{ encounter.room }}
          v-list-tile-sub-title
            v-layout(row wrap)
              v-flex(xs6) {{ encounter.monsterName }}
              v-flex(xs3) {{ encounter.monsterNum }}体
              v-flex(xs3) {{ encounter.exp }}exp
        v-list-tile-action
          v-btn(flat icon)
            v-icon done
      v-divider
  v-btn(block dark to="encounters/new") 新規遭遇
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import PATH from '@/types/PathTypes';

@Component({
  computed: {
    ...mapGetters(['encounters']),
  },
})
export default class SessionEncounter extends Vue {
  @Prop() private sessionId!: string;

  private go(encounterId: string) {
    this.$router.push({
      name: PATH.ENCOUNTER_BATTLE,
      params: {
        sessionId: this.sessionId,
        encounterId,
      },
    });
  }
}
</script>
