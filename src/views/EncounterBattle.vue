<template lang="pug">
  .headline
    v-list(two-line)
      template(v-for="[creatureId, creature] in Array.from(creatures)")
        CreatureTile(:creatureId="creatureId")
        v-divider
    v-btn(to="reward") 戦闘終了
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import CreatureTile from '@/components/CreatureTile.vue';

@Component({
  components: {
    CreatureTile,
  },
})
export default class EncounterBattle extends Vue {
  @Prop() private sessionId!: string;
  @Prop() private encounterId!: string;

  private get creatures() {
    return this.$store.getters.creatures(this.encounterId);
  }
}
</script>
