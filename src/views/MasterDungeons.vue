<template lang="pug">
  v-list(two-line)
    template(
        v-for="(dungeon, key) in dungeons"
    )
      v-list-tile
        PlayerTileContent(
          :id="key"
          :key="key"
          @click="$router.push(`/dungeon/${key}`)"
        )
      v-divider
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import PlayerTileContent from '@/components/PlayerTileContent.vue';
  import LifeCounter from '@/components/LifeCounter.vue';
  import { db } from '@/plugins/firebase';

  @Component({
    components: {
      PlayerTileContent,
      LifeCounter,
    },
  })
  export default class Players extends Vue {
    private get dungeons() {
        return this.$store.state.dungeons;
    }
    private created(): void {
    this.$store.commit('layout/icon', 'add');
    this.$store.commit('layout/path', '/dungeonForm/new');
  }
  }
</script>

<style lang="stylus" scoped>
</style>
