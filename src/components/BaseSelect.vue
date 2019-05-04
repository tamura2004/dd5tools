<template lang="pug">
  v-select.pa-2(
    item-text="name"
    item-value="id"
    :label="label"
    :items="items"
    :rules="required"
    :value="value"
    :multiple="multiple"
    :chips="multiple"
    @input="$emit('input', $event)"
  )
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Item from '@/models/Item';

type Validator = (v: string) => boolean | string;

@Component
export default class BaseSelect extends Vue {
  @Prop() private value!: string;
  @Prop() private items!: Item[];
  @Prop() private label!: string;
  @Prop({ default: false }) private multiple!: boolean;

  private required: Validator[] = [
    (v: string) => !!v || '必須項目です',
  ];
}
</script>

<style lang="stylus">
</style>
