<template lang="pug">
v-app
  v-navigation-drawer(app fixed v-model="drawer")
    v-toolbar(flat dark dense)
      v-toolbar-title メニュー
    v-list(dense)
      v-list-tile(v-for="menu in menues" :to="menu.path" :key="menu.path")
        v-list-tile-action
          v-icon {{ menu.icon }}
        v-list-tile-title {{ menu.label }}
  v-toolbar(app flat dark dense)
    v-toolbar-side-icon(@click="drawer=!drawer")
    v-toolbar-title.headline {{ titles.get($route.name) }}
    v-spacer
    v-toolbar-items
      v-btn(flat icon @click="processing=!processing")
        v-icon done
  v-content
    v-container
      template(v-if="!processing")
        router-view
      template(v-else)
        v-layout(align-center justify-center fill-height)
          v-progress-circular.mt-5(:size="100" color="primary" indeterminate)
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { TITLES } from '@/data/TITLES';

interface Menu {
  path: string;
  icon: string;
  label: string;
}

@Component
export default class App extends Vue {
  private drawer: boolean = false;
  private processing: boolean = false;
  private menues: Menu[] = [
    {
      path: '/',
      icon: 'home',
      label: 'ホーム',
    },
    {
      path: '/signin',
      icon: 'person',
      label: 'サインイン',
    },
    {
      path: '/signup',
      icon: 'person_add',
      label: 'サインアップ',
    },
    {
      path: '/sessions',
      icon: 'list',
      label: 'セッション一覧',
    },
    {
      path: '/sessions/new',
      icon: 'add',
      label: '新規セッション',
    },
    {
      path: '/npcs',
      icon: 'list',
      label: 'NPC一覧',
    },
    {
      path: '/npcs/new',
      icon: 'person_add',
      label: '新規NPC',
    },
  ];
  private titles: Map<string, string> = TITLES;
}
</script>
<style lang="stylus">
table
  width 100%
  border solid 1px grey
  border-collapse collapse

tr
  height 32px

td
  border solid 1px grey
  padding 0 4px

th
  border solid 1px grey

th.label
  text-align center
  background-color #212121
  color white

td.number
  text-align center
  width 32px
</style>
