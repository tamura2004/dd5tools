<template lang="pug">
      v-list(two-line)
        div(
          v-for="(player, playerId) in players"
          :key="playerId"
          @click="select(playerId)"
        )
          v-list-tile
            v-list-tile-avatar
              v-img(:src="`/img/${player.avatar}`")
            PlayerTileContent(:id="playerId")
          v-divider
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PlayerTileContent from '@/components/PlayerTileContent.vue';
import { mapState } from 'vuex';

@Component({
  components: {
    PlayerTileContent,
  },
  computed: {
    ...mapState(['players']),
  },
})
export default class GuildPlayers extends Vue {
  private select(playerId: string): void {
    this.$router.push(`player/${playerId}/rank`);
  }
  private created(): void {
    this.$store.commit('layout/title', 'PCを選択して下さい');
  }
}
</script>
