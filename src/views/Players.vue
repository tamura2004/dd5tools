<template lang="pug">
  v-card
    v-toolbar
      v-toolbar-title.text-xs-center ＰＣ一覧
    v-list(two-line)
      PlayerList(v-for="player in players" :key="player._id.$oid" :player="player")

</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import PlayerList from '@/components/PlayerList.vue';

  @Component({
    components: {
      PlayerList,
    },
  })
  export default class Players extends Vue {
    private get players() {
      return this.$store.state.players;
    }
    private created(): void {
      this.$store.dispatch('getPlayers');
    }
  }
</script>

<style lang="stylus">
</style>
