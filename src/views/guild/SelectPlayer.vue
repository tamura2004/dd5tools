<template lang="pug">
  v-layout
    v-list(two-line)
      div(
        v-for="(player, key) in players"
        :key="key"
        @click="select(key)"
      )
        v-list-tile
          v-list-tile-avatar
            v-img(:src="`/img/${player.avatar}`")
          PlayerTileContent(:id="key")
        v-divider
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PlayerTileContent from '@/components/PlayerTileContent.vue';

@Component({
  components: {
    PlayerTileContent,
  },
})
export default class GuildSelectPlayer extends Vue {
  private get players() {
    return this.$store.state.players;
  }
  private select(id: string): void {
    this.$router.push(`/guild/${id}/rank`);
  }
}
</script>
