<template lang="pug">
  .headline SessionPlayers
    v-btn(block dark color="primary" v-if="!edit" @click="edit=true") 参加ＰＣ選択
    v-btn(block dark v-if="!edit" to="encounters") 遭遇選択へ
    v-btn(block dark color="success" v-if="edit" @click="save") 決定
    v-btn(block dark v-if="edit" @click="cancel") キャンセル
    v-list(three-line)
      template(v-for="[id, player] in Array.from(players)")
        template(v-if="session.playerIds.includes(id) || edit")
          v-list-tile(:key="id")
            v-list-tile-action(v-if="edit")
              v-checkbox(v-model="playerIds" :value="id")
            PlayerTileContent(:id="id")
          v-divider
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Item from '@/models/Item';
import Player from '@/models/Player';
import PlayerTileContent from '@/components/PlayerTileContent.vue';
import { UPDATE_SESSION_PLAYERS } from '@/types/ActionTypes';
import Session from '@/models/Session';

@Component({
  components: {
    PlayerTileContent,
  },
})
export default class SessionPlayers extends Vue {
  @Prop() private sessionId!: string;

  private edit: boolean = false;
  private playerIds: string[] = [];

  private get players(): Player[] {
    return this.$store.state.players;
  }

  private get session(): Session {
    return this.$store.getters.session(this.sessionId);
  }

  private save() {
    this.$store.dispatch(UPDATE_SESSION_PLAYERS, {
      sessionId: this.sessionId,
      playerIds: this.playerIds,
    })
    .then(() => this.edit = false);
  }

  private cancel() {
    this.edit = false;
  }

  private select() {
    this.edit = true;
    Object.assign(this.playerIds, this.session.playerIds);
  }

private created() {
    Object.assign(this.playerIds, this.session.playerIds);
  }
}
</script>
