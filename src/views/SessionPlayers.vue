<template lang="pug">
  .headline SessionPlayers
    v-btn(block dark color="primary" v-if="!edit" @click="edit=true") 参加ＰＣ選択
    v-btn(block dark color="success" v-if="edit" @click="save") 決定
    v-list(three-line)
      template(v-for="[id, player] in Array.from(players)")
        template(v-if="playerIds.includes(id) || edit")
          v-list-tile(:key="id")
            v-list-tile-action(v-if="edit")
              v-checkbox(v-model="playerIds" :value="id")
            PlayerTileContent(:id="id")
          v-divider
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Item from '@/models/Item';
import Player from '@/models/Player';
import PlayerTileContent from '@/components/PlayerTileContent.vue';

@Component({
  components: {
    PlayerTileContent,
  },
})
export default class SessionPlayers extends Vue {
  private edit: boolean = false;
  private playerIds: string[] = [];

  private get players(): Player[] {
    return this.$store.state.players;
  }

  private save() {
    this.edit = false;
  }
}
</script>
