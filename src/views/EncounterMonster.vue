<template lang="pug">
  .headline(v-if="monster")
    MonsterTable(:monster="monster")
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import MONSTERS from '@/data/MONSTERS';
import TEMPLATES from '@/data/TEMPLATES';

@Component
export default class EncounterMonster extends Vue {
  @Prop() private sessionId!: string;
  @Prop() private encounterId!: string;

  private get encounter() {
    return this.$store.getters.encounter(this.encounterId);
  }

  private get monster() {
    return this.encounter.monster;
  }
}
</script>

<style lang="stylus" scoped>
.label
  width 20%
td.body-2
  line-height 24px
</style>
