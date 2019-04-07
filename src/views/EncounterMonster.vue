<template lang="pug">
  .headline(v-if="monster")
    MonsterTable(:monster="monster")
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import CreatureTile from '@/components/CreatureTile.vue';
import MonsterTable from '@/components/MonsterTable.vue';
import MONSTERS from '@/data/MONSTERS';
import TEMPLATES from '@/data/TEMPLATES';

@Component({
  components: {
    CreatureTile,
    MonsterTable,
  },
})
export default class EncounterMonster extends Vue {
  @Prop() private sessionId!: string;
  @Prop() private encounterId!: string;

  private get encounter() {
    return this.$store.getters.encounter(this.encounterId);
  }

  private get monster() {
    let info = MONSTERS[(this.encounter && this.encounter.monsterId) || 0];
    info.templateId = this.encounter.templateId;
    // if (this.encounter.templateId !== null) {
    //   info = info.add(TEMPLATES[this.encounter.templateId]);
    // }
    return info.merged;
  }
}
</script>

<style lang="stylus" scoped>
.label
  width 20%
td.body-2
  line-height 24px
</style>
