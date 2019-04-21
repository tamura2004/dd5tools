<template lang="pug">
  v-text-field.pa-2(
    :label="label"
    :prepend-icon="icon"
    :type="type"
    :rules="required"
    :value="value"
    @input="$emit('input', $event)"
  )
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

type Validator = (v: string) => boolean | string;

@Component
export default class BaseTextField extends Vue {
  @Prop() private value!: string;
  @Prop() private label!: string;
  @Prop() private icon!: string;
  @Prop({ default: 'text' }) private type!: string;

  private required: Validator[] = [
    (v: string) => !!v || '必須項目です',
  ];
}
</script>
