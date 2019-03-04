<template lang="pug">
  v-list
    template(v-for="(dungeon, key) in dungeons")
      v-list-tile
        v-list-tile-action(@click="$router.push(`/dungeonForm/${key}`)")
          v-btn(flat fab small)
            v-icon edit
        v-list-tile-content
          v-list-tile-title {{ dungeon.name }}
          v-list-tile-sub-title {{ dungeon.description }}
        v-list-tile-action(@click="$router.push(`/dungeon/${key}/floors`)")
          v-btn(flat fab small icon)
            v-icon arrow_forward_ios
      v-divider
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Dungeon from '@/models/Dungeon';

  @Component
  export default class Dungeons extends Vue {
    private get dungeons(): { [key: string]: Dungeon } {
      return this.$store.state.dungeons;
    }
  }
</script>

<style lang="stylus" scoped>
</style>
