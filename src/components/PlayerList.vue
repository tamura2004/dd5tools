<template lang="pug">
  div
    v-list-tile.my-1.elevation-4
        v-list-tile-avatar
            img(:src="avater")
        v-list-tile-content
            v-list-tile-title
                v-layout
                    v-flex(xs6) {{ player.characterName }}
                    v-flex(xs6) {{ player.klass }}{{ player.level }}
            v-list-tile-sub-title
                v-layout
                    v-flex(xs8) {{ player.race }}/{{ player.background }}
                    v-flex(xs4) PL:{{ player.name }}
    p.mt-5 designed by Freepik from Flaticon
                    

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Player } from '@/models/Player';
import { AVATER } from '@/data/DATA';

@Component
export default class PlayerList extends Vue {
  private avater = require('@/assets/' + AVATER.sample());
  @Prop() private player!: Player;
}
</script>

<style lang="stylus">
</style>
