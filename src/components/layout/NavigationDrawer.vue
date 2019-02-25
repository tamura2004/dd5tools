<template lang="pug">
  v-navigation-drawer(
    fixed
    :clipped="$vuetify.breakpoint.mdAndUp"
    app
    v-model="drawer"
  )
    v-list(dense)
      v-list-group(
        v-for="item in items"
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
          @click=""
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
  children?: MenuItem[];
}

@Component
export default class NavigationDrawer extends Vue {
  @Prop() private drawer!: boolean;

  private title!: string;
  private color!: string;

  private items: MenuItem[] = [
    {
      icon: 'home',
      text: 'player',
      model: true,
      children: [
        {
          text: 'guild',
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
      model: false,
      children: [
        {
          text: 'monsters',
        },
        {
          text: 'dungeons',
        },
        {
          text: 'item floors',
        },
      ],
    },
  ];
}
</script>

<style lang="stylus">
</style>