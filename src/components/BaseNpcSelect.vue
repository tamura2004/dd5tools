<template lang="pug">
  base-select(
    label="依頼人"
    :items="npcs"
    :value="value"
    @input="$emit('input', $event)"
  )
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Item from '@/models/Item';

@Component
export default class BaseNpcSelect extends Vue {
  @Prop() private value!: string;

  private get npcs() {
    return Item.from(this.$store.state.npcs);
  }
}
</script>

<style lang="stylus">
</style>
