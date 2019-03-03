<template lang="pug">
  v-app
    v-toolbar(app dark flat dense)
      v-toolbar-side-icon(@click.stop="drawer = !drawer")
      v-toolbar-title.headline
        span D&D5eツール
      v-spacer
    v-content
      v-container(fluid grid-list-lg)
        v-layout(align-start row wrap)
          v-flex(xs6 sm4 md3 v-for="menu in menues" :key="menu.name")
            v-card(hover :to="'/' + menu.name + 's'")
              v-responsive(:aspect-ratio="16/9")
                v-img.white--text(:src="`/img/${menu.name}s.png`")
                  v-container.pa-2(fill-height fluid)
                    v-layout(align-end justify-start row fill-height)
                      v-flex.py-0(xs12)
                        span.headline.py-0.font-weight-bold {{ menu.label }}
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
  // private draw
  private menues = [
    { label: 'ダンジョン', name: 'dungeon' },
    { label: 'モンスター', name: 'monster' },
    { label: 'ＰＣ', name: 'player' },
    { label: 'NPC', name: 'npc' },
    { label: '武器', name: 'weapon' },
    { label: '防具', name: 'armor' },
    { label: '呪文', name: 'spell' },
    { label: '場所', name: 'place' },
    { label: '道具', name: 'item' },
  ];
}
</script>
