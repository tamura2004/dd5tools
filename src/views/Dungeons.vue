<template lang="pug">
  v-container(fluid fill-height)
    v-layout(align-start justify-center)
      v-flex(xs10 sm8 md6 lg4 xl4)
        FloorCard(v-for="floor in floors" :key="floor.key" :floor="floor")

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
    return this.$store.state.floors;
  }
}
</script>

<style lang="stylus">
</style>
