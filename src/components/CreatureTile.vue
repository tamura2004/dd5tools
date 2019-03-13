<template lang="pug">
  div
    v-list-tile
      v-list-tile-action
        v-container.ma-0.pa-0
          v-layout(justify-center)
            .caption INIT
          v-layout(justify-center)
            .display-1.red--text {{ hp }}
      Avatar(v-model="avatar")
      PlayerTileContent(:id="id")
      v-list-tile-action
        v-container.ma-0.pa-0
          v-layout(justify-center)
            .caption 残hp
          v-layout(justify-center)
            LifeCounter(v-model="hp")
    v-divider

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class CreatureTile extends Vue {
  @Prop() private creatureId!: string;
}

</script>

<style lang="stylus">
</style>
