<template lang="pug">
  v-textarea.pa-2(
    auto-grow
    :label="label"
    :value="value"
    @input="$emit('input', $event)"
  )
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class BaseTextarea extends Vue {
  @Prop() private value!: string;
  @Prop() private label!: string;

}
</script>
