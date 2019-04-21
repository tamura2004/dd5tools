<template lang="pug">
  base-user-tenkey(
    title="経験値"
    field="exp"
    :id="id"
  )
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class BaseUserExpTenkey extends Vue {
  @Prop() private id!: string;
}
</script>

<style lang="stylus" scoped>
</style>
