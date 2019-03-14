<template lang="pug">
v-list-tile
  v-list-tile-action
    v-container.ma-0.pa-0
      v-layout(justify-center)
        .caption INIT
      v-layout(justify-center)
        .display-1.red--text {{ creature.initiative }}
  v-list-tile-avatar
    v-img(:src="`/img/#{creature.avatar}`")
  v-list-tile-content
    v-list-tile-title
      v-layout
        v-flex.text-truncate(xs8) {{ creature.name }}
        v-flex.caption(xs4) AC:{{ creature.ac }}
    v-list-tile-sub-title
      v-layout
        v-flex.text-truncate(xs8) {{ creature.type }}

  v-list-tile-action
    v-container.ma-0.pa-0
      v-layout(justify-center)
        .caption 残hp
      v-layout(justify-center)
        .display-1 {{ creature.hp }}
        //- LifeCounter(v-model="hp")
  v-divider

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { mapGetters } from 'vuex';


@Component({
  computed: {
    ...mapGetters(['creature']),
  },
})
export default class CreatureTile extends Vue {
  @Prop() private creatureId!: string;
}

</script>

<style lang="stylus">
</style>
