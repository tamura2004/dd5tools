<template lang="pug">
  v-content
    h3 {{ floor.level }}.{{ floor.name}}
    p {{ floor.description }}
    v-container(grid-list-md fluid)
      v-layout(row wrap)
        v-flex(v-for="(sq, i) in floor.map" :key="i" xs2)
          v-card(flat tile :dark="sq")

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
