<template lang="pug">
  v-toolbar(
    app
    dark
    :color="color"
    :clipped-left="$vuetify.breakpoint.mdAndUp"
    fixed
  )
    v-toolbar-title
      v-toolbar-side-icon(@click.stop="$emit('update:drawer', !drawer)")
      span {{ title }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class ToolBar extends Vue {
  @Prop() private drawer!: boolean;

  private get color(): string {
    return this.$router.currentRoute.meta.color;
  }

  private get title(): string {
    return this.$router.currentRoute.meta.title;
  }
}

</script>

<style lang="stylus">
</style>
