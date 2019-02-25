<template lang="pug">
  v-content(app)
    v-container(fluid)
      router-view
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Player } from '@/models/Player';
import MenuButton from '@/components/MenuButton.vue';

@Component
export default class GuildMain extends Vue {
  @Prop() private playerId!: string;

  private get player(): Player {
    return this.$store.state.players[this.playerId];
  }
}
</script>
