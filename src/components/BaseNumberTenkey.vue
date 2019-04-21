<template lang="pug">
  v-container.ma-0.pa-0
    v-layout(justify-center)
      Tenkey(
        :collectionName="collectionName"
        :id="id"
        :field="field"
        :title="title"
      )
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class BaseNumberTenkey extends Vue {
  @Prop() private collectionName!: string;
  @Prop() private id!: string;
  @Prop() private field!: string;
  @Prop() private title!: string;
}
</script>

<style lang="stylus" scoped>
</style>
