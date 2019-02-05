<template lang="pug">
  v-app
    v-navigation-drawer(v-model="drawer" fixed app)
      v-card.white--text(flat color="green lighten-3")
        v-responsive(:aspect-ratio="16/3")
          v-card-title.pa-2 you

      v-list(dense)
        v-list-tile(v-for="menu in drawerMenues" :to="menu.path")
          v-list-tile-action
            v-icon home
          v-list-tile-content
            v-list-tile-title {{ menu.name }}
    v-toolbar(app)
      v-toolbar-side-icon(@click.stop="drawer = !drawer")
      v-toolbar-title.headline
        span D&D5eツール
      v-spacer
    v-content
      v-container(fluid fill-height)
        v-layout(align-start justify-center)
          v-flex(sm12 lg8)
            transition(name="router" mode="out-in")
              router-view
    v-footer
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Menu from '@/views/Menu.vue';

@Component({
  components: { Menu },
})
export default class App extends Vue {
  private drawer = null;
  private drawerMenues = [
    { name: 'dungeons', path: '/dungeons' },
    { name: 'monsters', path: '/monsters' },
    { name: 'players', path: '/players' },
    { name: 'weapons', path: '/weapons' },
    { name: 'armors', path: '/armors' },
  ];

  private home(): void {
    this.$router.push('/');
  }
}
</script>

<style lang="stylus">
  .router-enter-active, .router-leave-active
    transition all 0.3s ease
  
  .router-enter
    transform translateX(100%)
    // opacity 0
  
  .router-leave-active
    // opacity 0
    transform translateX(-100%)
</style>