<template lang="pug">
div
  .headline 特技
  v-list
    template(v-for="[key, feat] in feats")
      base-feat-list(:featId="key" :key="key")
      v-divider
    base-feat-list-new(:playerId="playerId")
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class PlayerFeats extends Vue {
  @Prop() private playerId!: string;

  private get feats() {
    return this.$store.getters.feats(this.playerId);
  }
}
</script>
