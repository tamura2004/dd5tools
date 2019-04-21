<template lang="pug">
  v-text-field.pa-2(
    :label="label"
    :rules="required"
    :value="value"
    @input="$emit('input', Number($event))"
  )
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

type Validator = (v: string) => boolean | string;

@Component
export default class BaseNumberField extends Vue {
  @Prop() private value!: number;
  @Prop() private label!: string;

  private required: Validator[] = [
    (v: string) => !!v || '必須項目です',
  ];
}
</script>
