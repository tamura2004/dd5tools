<template lang="pug">
  v-content(v-if="!!floor")
    v-container(fluid)
      h3 {{ floor.level }}.{{ floor.name}}
      p.mb-0 {{ floor.description }}
    v-layout(row wrap)
      v-flex(xs12 sm4)
        router-view(:id="id" name="players")
        router-view(:id="id" name="monsters")
      v-flex(xs12 sm4)
        router-view(:id="id" name="sheet")
      v-flex(xs12 sm4)
        router-view(:id="id" name="map")
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';
  import Dungeon from '@/models/Dungeon.vue';
  import Floor from '@/models/Floor.vue';

  @Component
  export default class DungeonFloor extends Vue {
    @Prop() private dungeonId!: string;
    @Prop() private id!: string;

    private get dungeon(): Dungeon | undefined {
      return this.$store.state.dungeons[this.dungeonId];
    }
    private get floor(): Floor | undefined {
      return this.$store.state.floors[this.id];
    }
  }
</script>

<style lang="stylus" scoped>
</style>
