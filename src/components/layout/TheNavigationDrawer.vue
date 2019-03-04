<template lang="pug">
  v-navigation-drawer(
    fixed
    :clipped="$vuetify.breakpoint.mdAndUp"
    app
    v-model="drawer"
  )
    v-list(dense)
      template(v-for="item in items")
        v-list-group(
          v-if="item.children"
          v-model="item.model"
          :prepend-icon="item.icon"
          :key="item.text"
          no-action
        )
          v-list-tile(slot="activator")
            v-list-tile-content
              v-list-tile-title {{ item.text }}
          v-list-tile(
            v-for="(child, i) in item.children"
            :key="i"
            :to="child.path"
          )
            v-list-tile-content
              v-list-tile-title {{ child.text }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

interface MenuItem {
  icon?: string;
  alt?: string;
  text: string;
  model?: boolean;
  path?: string;
  children?: MenuItem[];
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
    {
      icon: 'home',
      text: 'player',
      model: false,
      children: [
        {
          text: 'home',
          path: '/',
        },
        {
          text: 'THK',
        },
        {
          text: 'item shop',
        },
      ],
    },
    {
      icon: 'home',
      text: 'master',
      model: true,
      children: [
        {
          text: 'PC',
          path: '/players',
        },
        {
          text: 'ダンジョン',
          path: '/dungeons',
        },
        {
          text: 'モンスター',
          path: '/monsters',
        },
      ],
    },
  ];
}
</script>

<style lang="stylus">
</style>