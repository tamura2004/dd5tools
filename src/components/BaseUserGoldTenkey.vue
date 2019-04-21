<template lang="pug">
  base-user-tenkey(
    title="所持金"
    field="gold"
    :id="id"
  )
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class BaseUserGoldTenkey extends Vue {
  @Prop() private id!: string;
}
</script>

<style lang="stylus" scoped>
</style>
