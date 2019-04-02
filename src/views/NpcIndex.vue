<template lang="pug">
v-layout(row wrap)
  v-flex.pa-2(xs6 sm4 md3)
    v-toolbar(flat dark dense color="grey")
      v-toolbar-title.subheading 新規NPC
    v-card(dark color="grey")
      v-responsive(:aspect-ratio="4/5")
        v-btn#btn(large block flat to="npcs/new" height="320px")
          v-icon(large) add
      v-divider
      v-card-actions
        v-spacer
        v-btn(flat small icon color="grey")
          v-icon add
  v-flex.pa-2(xs6 sm4 md3 v-for="[key, npc] in Array.from(npcs)" :key="key")
    npc-card(
      :npc="npc"
      :id="key"
    )
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import firebase from 'firebase/app';
import 'firebase/storage';
import NpcCard from '@/components/NpcCard.vue';

@Component({
  computed: {
    ...mapGetters(['npcs']),
  },
  components: {
    NpcCard,
  },
})
export default class NpcIndex extends Vue {
}
</script>

<style lang="stylus" scoped>
#btn
  height 100%
</style>
