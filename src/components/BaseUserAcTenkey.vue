<template lang="pug">
  base-user-tenkey(
    title="AC"
    field="ac"
    :id="id"
  )
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class BaseUserAcTenkey extends Vue {
  @Prop() private id!: string;
}
</script>

<style lang="stylus" scoped>
</style>
