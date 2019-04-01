<template lang="pug">
v-app
  v-navigation-drawer(app fixed right v-model="$root.drawer")
    v-toolbar(flat dark dense)
      v-toolbar-title メニュー
    v-list(dense)
      v-list-tile(v-for="menu in menues" :to="menu.path" :key="menu.path")
        v-list-tile-action
          v-icon {{ menu.icon }}
        v-list-tile-title {{ menu.label }}
  v-toolbar(app fixed flat dark dense)
    v-toolbar-items
      v-btn(flat icon @click="$router.go(-1)")
        v-icon arrow_back_ios
    v-toolbar-title.headline {{ titles.get($route.name) }}
    v-spacer
    v-toolbar-side-icon(@click="$root.drawer=!$root.drawer")
  v-content
    v-container
      template(v-if="!$root.processing && ready")
        router-view
      template(v-else)
        v-layout(align-center justify-center fill-height)
          v-progress-circular.mt-5(:size="100" color="primary" indeterminate)
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { TITLES } from '@/data/TITLES';
import { MENUES } from '@/data/MENUES';

@Component
export default class App extends Vue {
  private menues = MENUES;
  private titles: Map<string, string> = TITLES;

  private get ready(): boolean {
    return this.$store.state.npcs.size > 0;
  }
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
