<template lang="pug">
  v-navigation-drawer(app fixed right v-model="drawer")
    the-navigation-drawer-toolbar
    the-navigation-drawer-list
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class TheNavigationDrawer extends Vue {
  @Prop() private value!: boolean;

  private get drawer() {
    return this.value;
  }

  private set drawer(value) {
    this.$emit('input', value);
  }
}
</script>

<style lang="stylus" scoped>
</style>
