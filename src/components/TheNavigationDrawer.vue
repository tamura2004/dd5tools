<template lang="pug">
  v-navigation-drawer(
    fixed
    :clipped="$vuetify.breakpoint.mdAndUp"
    app
    v-model="drawer"
  )
    v-toolbar(flat)
      v-list
        v-list-tile
          v-list-tile-title.title メニュー
    v-divider
    v-list(dense)
      v-list-tile(
        v-for="item in items"
        :key="item.title"
        :to="item.path"
      )
        v-list-tile-action
          v-icon {{ item.icon }}
        v-list-tile-content
          v-list-tile-title {{ item.title }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

interface MenuItem {
  icon: string;
  title: string;
  path: string;
}

@Component
export default class TheNavigationDrawe extends Vue {
  private title!: string;
  private color!: string;

  private get drawer(): boolean {
    return this.$store.state.layout.drawer;
  }
  private set drawer(active: boolean) {
    this.$store.commit('layout/drawer', active);
  }

  private items: MenuItem[] = [
    { icon: 'home', title: 'ホーム', path: '/' },
    { icon: 'home', title: '冒険者ギルド', path: '/guild/reception' },
    { icon: 'home', title: 'マスターメニュー', path: '/master/menu' },
    { icon: 'home', title: 'PC一覧', path: '/master/players' },
    { icon: 'home', title: 'モンスター', path: '/master/monsters' },
  ];
}
</script>

<style lang="stylus">
</style>