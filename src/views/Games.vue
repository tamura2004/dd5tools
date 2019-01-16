<template lang="pug">
  v-card
    v-toolbar
      v-toolbar-title.text-xs-center セッション一覧
      v-btn(absolute dark fab bottom right color="red" @click="newGame")
        v-icon add
    v-list(two-line)
      GameList(v-for="game in games" :key="game._id.$oid" :game="game")
    v-card-text#footer
    p.mt-5 designed by Freepik from Flaticon

</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import GameList from '@/components/GameList.vue';

  @Component({
    components: {
      GameList,
    },
  })
  export default class Games extends Vue {
    private get games() {
      return this.$store.state.games;
    }
    private newGame(): void {
      this.$router.push('/gameForm/new');
    }
    private created(): void {
      this.$store.dispatch('getGames');
    }
  }
</script>

<style lang="stylus" scoped>
</style>
