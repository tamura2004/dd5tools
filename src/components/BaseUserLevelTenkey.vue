<template lang="pug">
  base-user-tenkey(
    title="レベル"
    field="level"
    :id="id"
  )
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class BaseUserLevelTenkey extends Vue {
  @Prop() private id!: string;
}
</script>

<style lang="stylus" scoped>
</style>
