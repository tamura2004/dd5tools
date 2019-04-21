<template lang="pug">
v-list(dense)
  base-menu-tile(
    v-for="menu in menues"
    :menu="menu"
    :key="menu.path"
  )
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import * as ACTION from '@/types/ActionTypes';
import { MENUES } from '@/data/MENUES';

@Component
export default class TheNavigationDrawerList extends Vue {
  private menues = MENUES;
}
</script>

<style lang="stylus" scoped>
</style>
