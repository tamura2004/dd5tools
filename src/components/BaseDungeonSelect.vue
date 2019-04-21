<template lang="pug">
  base-select(
    label="場所"
    :items="dungeons"
    :value="value"
    @input="$emit('input', $event)"
  )
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Item from '@/models/Item';

@Component
export default class BaseDungeonSelect extends Vue {
  @Prop() private value!: string;

  private get dungeons() {
    return Item.from(this.$store.state.dungeons);
  }
}
</script>

<style lang="stylus">
</style>
