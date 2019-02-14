<template lang="pug">
  v-content(v-if="!!floor")
    v-container(fluid)
      h3 {{ floor.level }}.{{ floor.name}}
      p.mb-0 {{ floor.description }}
    router-view(:id="id" name="players")
    router-view(:id="id" name="monsters")
    router-view(:id="id" name="map")
    //- ListHeader(title="PC" add="save")
    //- ListHeader(title="モンスター" done @done="save")
    //- v-container(grid-list-md fluid)
    //-   v-layout(row wrap)
    //-     v-flex(v-for="(sq, i) in floor.map" :key="i" xs2)
    //-       v-card.pa-1(flat tile :class="sq ? 'grey lighten-1' : 'black lighten-1'")
    //-         v-responsive(:aspect-ratio="1/1")
    //-           v-img(src="/img/012-devil.png" v-show="Math.random() < 0.1 && sq")
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
