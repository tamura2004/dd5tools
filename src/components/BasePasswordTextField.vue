<template lang="pug">
  base-text-field(
    icon="lock"
    label="password"
    type="password"
    :value="value"
    @input="$emit('input', $event)"
  )
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class BasePasswordTextField extends Vue {
  @Prop() private value!: string;
}
</script>

<style lang="stylus">
</style>
