<template lang="pug">
  base-text-field(
    label="email"
    icon="email"
    :value="value"
    @input="$emit('input', $event)"
  )
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

type validateFunc = Array<(v: string) => boolean | string>;

@Component
export default class BaseEmailTextField extends Vue {
  @Prop() private value!: string;
}
</script>

<style lang="stylus">
</style>
