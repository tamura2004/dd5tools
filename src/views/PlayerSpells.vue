<template lang="pug">
  .headline 呪文
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Player from '@/models/Player';

@Component
export default class PlayerSpells extends Vue {
  @Prop() private playerId!: string;
  private get player(): Player | undefined {
    return this.$store.getters.player(this.playerId);
  }
}
</script>
