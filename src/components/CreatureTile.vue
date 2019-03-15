<template lang="pug">
v-list-tile
  v-list-tile-action
    v-container.ma-0.pa-0
      v-layout(justify-center)
        .caption INIT
      v-layout(justify-center)
        .display-1.red--text {{ creature(creatureId).initiative }}
  v-list-tile-avatar
    v-img(:src="`/img/${creature(creatureId).avatar}`")
  v-list-tile-content
    v-list-tile-title
      v-layout
        v-flex.text-truncate(xs12) {{ creature(creatureId).name }}
    v-list-tile-sub-title
      v-layout
        v-flex.text-truncate(xs8) {{ creature(creatureId).type }}
        v-flex.caption(xs4) AC:{{ creature(creatureId).ac }}

  v-list-tile-action
    v-container.ma-0.pa-0
      v-layout(justify-center)
        .caption 残hp
      v-layout(justify-center)
        .display-1 {{ creature(creatureId).hp }}
        //- LifeCounter(v-model="hp")

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
