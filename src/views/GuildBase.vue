<template lang="pug">
  router-view
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Player } from '@/models/Player';
import MenuButton from '@/components/MenuButton.vue';

@Component
export default class GuildBase extends Vue {
  @Prop() private playerId!: string;

  private get player(): Player {
    return this.$store.state.players[this.playerId];
  }
  private created(): void {
    this.$store.commit('layout/toolbar', true);
    this.$store.commit('layout/color', 'primary');
    this.$store.commit('layout/title', '冒険者ギルド?');
  }
}
</script>
