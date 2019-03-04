<template lang="pug">
  v-list(two-line)
    template(
        v-for="(monster, key) in monsters"
    )
      v-list-tile
        PlayerTileContent(
          :id="key"
          :key="key"
          @click="$router.push(`/monster/${key}`)"
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
    private get monsters() {
        return this.$store.state.monsters;
    }
    private created(): void {
    this.$store.commit('layout/icon', 'add');
    this.$store.commit('layout/path', '/monsterForm/new');
  }
  }
</script>

<style lang="stylus" scoped>
</style>
