<template lang="pug">
  v-layout.grey.darken-4.mt-1
    v-flex(xs11): .caption.white--text.py-1.px-2 {{ title }}
    v-flex(xs1): v-icon(dark @click="$emit('click')") {{ icon }}
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
