<template lang="pug">
v-layout.pa-4(row wrap justify-center)
  v-flex(xs12 v-for="menu in menues" :key="menu.name")
    MenuButton(:label="menu.label" color="grey darken-4" :to="menu.name")
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
    { label: 'ＰＣ', name: 'players' },
    { label: 'モンスター', name: 'monsters' },
    { label: 'ダンジョン', name: 'dungeons' },
    // { label: 'NPC', name: 'npc' },
    // { label: '武器', name: 'weapon' },
    // { label: '防具', name: 'armor' },
    // { label: '呪文', name: 'spell' },
    // { label: '場所', name: 'place' },
    // { label: '道具', name: 'item' },
  ];
}
</script>

<style lang="stylus" scoped>
// *
//   border 1px solid black
</style>
