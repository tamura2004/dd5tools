<template lang="pug">
  v-app
    v-toolbar
      v-btn(icon to="/"): v-icon clear
      v-toolbar-title.text-xs-center ＰＣ一覧
      v-btn(absolute dark fab bottom right color="red" @click="newPlayer")
        v-icon add
    v-list(two-line)
      PlayerList(v-for="player in players" :player="player" :key="player.id")
    v-card-text#footer
    p.mt-5 designed by Freepik from Flaticon

</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import PlayerList from '@/components/PlayerList.vue';
  import { db } from '@/plugins/firebase';

  @Component({
    components: {
      PlayerList,
    },
  })
  export default class Players extends Vue {
    private get players() {
        return this.$store.state.players;
    }
    private newPlayer(): void {
      this.$router.push('/playerForm/new');
    }
  }
</script>

<style lang="stylus" scoped>
</style>
