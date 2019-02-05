<template lang="pug">
  v-app
    v-navigation-drawer(v-model="drawer" fixed app)
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
            MenuButton(to="/players" label="キャラシー")
            MenuButton(to="/games" label="セッション")
            MenuButton(to="/monsters" label="モンスター")
            MenuButton(to="/floor" label="フロア")
            MenuButton(to="/dungeons" label="ダンジョン")
            MenuButton(to="/parties" label="パーティー")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MenuButton from '@/components/MenuButton.vue';

@Component({
  components: {
    MenuButton,
  },
})
export default class Menu extends Vue {
  private drawer = null;
  private drawerMenues = [
    { name: 'dungeons', path: '/dungeons' },
    { name: 'monsters', path: '/monsters' },
    { name: 'players', path: '/players' },
    { name: 'weapons', path: '/weapons' },
    { name: 'armors', path: '/armors' },
  ];
}
</script>
