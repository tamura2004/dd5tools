<template lang="pug">
  v-card
    v-list
      v-list-tile
        v-list-tile-content
          v-list-tile-title
            v-layout
              v-flex(xs7) {{ game.title }}
              v-flex(xs5) {{ game.gm }}
      v-divider
      h3.ma-2 参加ＰＣ
      v-list(two-line)
        PlayerList(v-for="player in game.players" :key="player._id.$oid" :player="player")

      v-btn(absolute dark fab bottom right color="green" @click="edit")
        v-icon edit

</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';
  import { Game } from '@/models/Game';
  import PlayerList from '@/components/PlayerList.vue';
  import API from '@/api';

  @Component({
    components: {
      PlayerList,
    },
  })
  export default class GameCard extends Vue {
  public game: Game = new Game({});
  @Prop() private id!: string;

  private edit(): void {
    this.$router.push(`/gameForm/${this.game._id.$oid}`);
  }

  private created(): void {
    if (typeof this.$store.state.game === 'undefined') {
      API.get('/games/' + this.id)
        .then((res) => {
          this.game = new Game(res.data);
        })
        .catch((e) => alert(e));
    } else {
      this.game = this.$store.state.game.find((g: Game) => g._id.$oid === this.id);
    }
  }
}
</script>

<style lang="stylus" scoped>
  .center
    text-align center
</style>
