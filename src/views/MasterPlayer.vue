<template lang="pug">
  router-view
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Player } from '@/models/Player';

@Component
export default class MasterPlayer extends Vue {
  @Prop() private playerId!: string;

  private get player(): Player | undefined {
    return this.$store.state.players[this.playerId];
  }

  private created(): void {
    this.$store.commit('layout/icon', 'add');
    this.$store.commit('layout/path', '/player/new/form');
    this.$store.commit('layout/title', this.player && this.player.characterName);
  }
}
</script>

<style lang="stylus" scoped>
</style>
