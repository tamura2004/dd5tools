<template lang="pug">
  div
    v-list-tile.my-1.elevation-4(:to="`/player/${this.id}`")
      v-list-tile-avatar(tile)
        v-img(:src="player.avatarAsset")
      v-list-tile-content
        v-list-tile-title
          v-layout
            v-flex.text-truncate(xs6) {{ player.characterName }}
            v-flex(xs6) {{ player.klass }}{{ player.level }}
        v-list-tile-sub-title
          v-layout
            v-flex(xs8) {{ player.race }}/{{ player.background }}
            v-flex(xs4) PL:{{ player.name }}
      v-list-tile-action
        v-icon keyboard_arrow_right

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Player } from '@/models/Player';
// import { AVATER } from '@/data/DATA';

@Component
export default class PlayerList extends Vue {
  @Prop() private id!: string;

  private get player(): Player | undefined {
    return this.$store.state.players[this.id];
  }
}
</script>

<style lang="stylus">
</style>
