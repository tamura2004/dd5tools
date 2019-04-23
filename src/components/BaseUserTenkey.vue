<template lang="pug">
v-flex(xs3)
  table.mb-1
    tr
      td.label {{ title }}
      td.number
        base-number-tenkey(
          collectionName="players"
          :title="`${title}を修正して=を押して下さい`"
          :field="field"
          :id="id"
        )
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class BaseUserTenkey extends Vue {
  @Prop() private title!: string;
  @Prop() private field!: string;
  @Prop() private id!: string;
}
</script>

<style lang="stylus" scoped>
</style>
