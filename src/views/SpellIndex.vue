<template lang="pug">
v-layout(row wrap)
  v-flex.pa-2(xs6 sm4 md3)
    v-toolbar(flat dark dense color="grey")
      v-toolbar-title.subheading 新規呪文
    v-card(dark color="grey")
      v-responsive(:aspect-ratio="4/5")
        v-btn#btn(large block flat to="spells/new" height="320px")
          v-icon(large) add
      v-divider
      v-card-actions
        v-spacer
        v-btn(flat small icon color="grey")
          v-icon add
  v-flex.pa-2(xs6 sm4 md3 v-for="[key, spell] in Array.from(spells)" :key="key")
    spell-card(
      :spell="spell"
      :id="key"
    )
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import SpellCard from '@/components/SpellCard.vue';

@Component({
  computed: {
    ...mapGetters(['spells']),
  },
  components: {
    SpellCard,
  },
})
export default class SpellIndex extends Vue {
}
</script>

<style lang="stylus" scoped>
#btn
  height 100%
</style>
