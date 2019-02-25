<template lang="pug">
  v-toolbar(
    app
    dark
    :color="color"
    :clipped-left="$vuetify.breakpoint.mdAndUp"
    fixed
  )
    v-toolbar-title
      v-toolbar-side-icon(@click.stop="$emit('update:drawer')")
      span {{ title }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ToolBar extends Vue {
  private title!: string;
  private color!: string;

  private created(): void {
    const {title, color} = this.$router.currentRoute.meta;
    this.title = title;
    this.color = color;
  }
}

</script>

<style lang="stylus">
</style>