<template lang="pug">
  v-container(grid-list-md fluid v-if="floor")
    v-layout(row wrap)
      v-flex(v-for="(sq, i) in floor.map" :key="i" xs2)
        v-card.pa-1(flat tile :class="sq === 1 ? 'black lighten-1' : 'grey lighten-1'")
          v-responsive(:aspect-ratio="1/1")
            v-img(src="/img/012-devil.png" v-show="sq === 2")
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';
  import Dungeon from '@/models/Dungeon.vue';
  import Floor from '@/models/Floor.vue';

  @Component
  export default class FloorMap extends Vue {
    @Prop() private id!: string;

    private get floor(): Floor | undefined {
      return this.$store.state.floors[this.id];
    }
  }
</script>

<style lang="stylus" scoped>
</style>
