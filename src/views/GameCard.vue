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
        PlayerList(v-for="player in game.players" :key="player.id" :player="player")

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
    @Prop() private id!: string;

    private get game(): Game | undefined {
      return this.$store.state.games.find((game: Game) => game.id === this.id);
    }

    private edit(): void {
      if (this.game !== undefined) {
        this.$router.push(`/gameForm/${this.game.id}`);
      } else {
        this.$router.push(`/gameForm/new`);
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .center
    text-align center
</style>
