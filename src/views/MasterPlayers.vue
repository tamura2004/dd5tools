<template lang="pug">
  v-list(two-line)
    template(
        v-for="(player, key) in players"
    )
      v-list-tile
        Avatar(:playerId="key")
        PlayerTileContent(
          :id="key"
          :key="key"
          @click="$router.push(`player/${key}/sheet`)"
        )
        v-list-tile-action
          v-icon arrow_forward_ios
      v-divider
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Avatar from '@/components/Avatar.vue';
  import PlayerTileContent from '@/components/PlayerTileContent.vue';
  import LifeCounter from '@/components/LifeCounter.vue';
  import { db } from '@/plugins/firebase';

  @Component({
    components: {
      Avatar,
      PlayerTileContent,
      LifeCounter,
    },
  })
  export default class Players extends Vue {
    private get players() {
        return this.$store.state.players;
    }
    private created(): void {
    this.$store.commit('layout/icon', 'add');
    this.$store.commit('layout/path', 'player/new/form');
  }
  }
</script>

<style lang="stylus" scoped>
</style>
