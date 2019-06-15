<template lang="pug">
  v-list-tile(
    :to="`/dungeon/${dungeonId}/sessions`"
  )
    v-list-tile-content
      v-list-tile-title {{ dungeon.name }}
      v-list-tile-sub-title {{ dungeon.description }}
    v-list-tile-action
      v-icon arrow_forward_ios
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class DungeonTile extends Vue {
  @Prop() private dungeonId!: string;

  private get dungeon() {
    return this.$store.getters.dungeon(this.dungeonId);
  }
}
</script>
