<template lang="pug">
  div
    v-list-tile(@click="show")
      v-list-tile-content
        v-list-tile-title
          v-layout
            v-flex(xs6) {{ game.title }}
            v-flex(xs6) {{ game.gm }}
        v-list-tile-sub-title
          v-layout
            v-flex(xs12) PL:{{ game.players.map((p) => p.name).join('/') }}
    v-divider

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Game } from '@/models/Game';

@Component
export default class GameList extends Vue {
  @Prop() private game!: Game;

  private show(): void {
    this.$router.push(`/game/${this.game._id.$oid}`);
  }
}
</script>

<style lang="stylus">
</style>
