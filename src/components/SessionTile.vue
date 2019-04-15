<template lang="pug">
  v-list-tile(
    :to="`/session/${sessionId}/players`"
  )
    v-list-tile-content
      v-list-tile-title {{ session.name }}
      v-list-tile-sub-title 報酬：{{ session.reward }}gp
    v-list-tile-action
      v-icon arrow_forward_ios
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class SessionTile extends Vue {
  @Prop() private sessionId!: string;

  private get session() {
    return this.$store.getters.session(this.sessionId);
  }
}
</script>
