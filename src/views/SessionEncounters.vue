<template lang="pug">
.headline.mt-4 遭遇一覧
  v-list(three-line)
    template(v-for="(encounter, index) in encounters")
      v-list-tile
        v-list-tile-avatar
          v-btn.font-weight-bold(fab small outline color="black") {{ index }}
        v-list-tile-title {{ encounter.name }}
        v-list-tile-action
          v-btn(flat icon)
            v-icon done
      v-divider
  v-btn(block dark :to="{ name: 'encounters/new' }") 新規遭遇
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class SessionEncounter extends Vue {
  @Prop() private sessionId!: string;
  private get encounters() {
    return this.$store.getters.encounters(this.sessionId);
  }
}
</script>
