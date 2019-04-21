<template lang="pug">
  v-layout(row wrap).mt-1
    v-flex.grey.darken-4(xs11)
      .body-2.white--text.py-1.px-2 {{ title }}
    v-flex.grey.darken-4(xs1)
      v-icon(dark @click="$emit('click')") {{ icon }}
    v-flex(xs12)
      slot
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class ListHeader extends Vue {
  @Prop() private title!: string;
  @Prop() private icon!: string;
}
</script>

<style lang="stylus" scoped>
</style>
