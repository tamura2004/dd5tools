<template lang="pug">
  .headline SessionPlayers
    v-list
      v-list-tile(v-for="[id, player] in Array.from(players)")
        PlayerTileContent(:id="id")
    //- v-btn(
    //-   block
    //-   dark
    //-   color="primary"
    //-   @click.stop="dialog=true"
    //- ) 参加ＰＣ選択
    //- v-dialog(v-model="dialog")
    //-   v-card
    //-     v-card-title.headline SELECT PC
    //-     v-container(fluid)
    //-       v-form
    //-         v-checkbox.my-0(
    //-           v-for="(player, id) in players"
    //-           v-model="playerIds"
    //-           :label="player.characterName"
    //-           :value="id"
    //-         )
    //-         v-btn(@click="dialog=false") OK
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Item from '@/models/Item';
import Player from '@/models/Player';
import PlayerTileContent from '@/components/PlayerTileContent.vue';

@Component({
  components: {
    PlayerTileContent,
  }
})
export default class SessionPlayers extends Vue {
  private dialog: boolean = false;
  private playerIds: string[] = [];

  private get players(): Player[] {
    return this.$store.state.players;
  }
}
</script>
