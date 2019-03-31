<template lang="pug">
v-layout(row wrap)
  v-flex.pa-2(xs6 sm4 md3)
    v-toolbar(flat dark dense)
      v-toolbar-title.subheading 新規NPC
    v-card
      v-responsive(:aspect-ratio="4/5")
      v-divider
      v-card-actions
        v-spacer
        v-btn(
          small
          color="error"
          to="/npcs/new"
        ) 追加


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
