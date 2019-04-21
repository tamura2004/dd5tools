<template lang="pug">
  base-number-tenkey(
    collectionName="players"
    title="hpを修正して=を押して下さい"
    field="hp"
    :id="id"
  )
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class BaseUserHpTenkey extends Vue {
  @Prop() private id!: string;
}
</script>

<style lang="stylus" scoped>
</style>
