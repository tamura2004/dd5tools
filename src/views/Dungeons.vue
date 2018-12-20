<template lang="pug">
  div#container
    FloorCard(
      v-for="(floor, i) in floors"
      :row="i"
      :key="floor.key"
      :floor="floor"
      :class="`card${i}`"
    )

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FloorCard from '@/components/FloorCard.vue';
import Floor from '@/models/Floor';

@Component({
  components: {
    FloorCard,
  },
})
export default class Dungeons extends Vue {
  get floors(): Floor[] {
    return this.$store.state.floors[0];
  }
}
</script>

<style lang="stylus">
  #container
    display grid
    grid-template-rows 1fr 1fr 1fr
    grid-template-columns 1fr

  .card1
    grid-row 1
    grid-column 1
    
  .card2
    grid-row 2
    grid-column 1

  .card3
    grid-row 3
    grid-column 1

</style>
