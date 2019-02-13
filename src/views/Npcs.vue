<template lang="pug">
  v-app
    v-toolbar(flat dark app dense)
      v-btn(icon @click="$router.go(-1)"): v-icon arrow_back_ios
      v-toolbar-title.text-xs-center NPC
      v-spacer
      v-btn(icon to="/npcForm/new"): v-icon add
    v-content
      v-list
        template(v-for="(npc, key) in npcs")
          v-list-tile
            v-list-tile-content
              v-list-tile-title {{ npc.name }}
              v-list-tile-sub-title {{ npc.description }}
            v-list-tile-action(@click="$router.push(`/npcForm/${key}`)"): v-icon edit
          v-divider
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Npc from '@/models/Npc';

  @Component
  export default class Npcs extends Vue {
    private get npcs(): { [key: string]: Npc } {
      return this.$store.state.npcs;
    }
  }
</script>

<style lang="stylus" scoped>
</style>
