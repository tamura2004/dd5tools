<template lang="pug">
  v-app
    v-toolbar(app dark flat dense color="primary")
      v-btn(icon to="/")
        v-icon home
      v-toolbar-title.headline
        span {{ player.characterName }}さん
    v-content
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
