<template lang="pug">
  router-view
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Player } from '@/models/Player';
import MenuButton from '@/components/MenuButton.vue';

@Component
export default class GuildPlayer extends Vue {
  @Prop() private playerId!: string;

  private get player(): Player | undefined {
    return this.$store.state.players[this.playerId];
  }

  private created(): void {
    if (this.player !== undefined) {
      this.$store.commit('layout/title', this.player.characterName + 'さん');
    }
  }
}
</script>
