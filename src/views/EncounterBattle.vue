<template lang="pug">
  .headline
    v-list(two-line)
      template(v-for="[creatureId, creature] in Array.from(creatures)")
        creature-tile(:creatureId="creatureId")
        v-divider
    v-btn(to="reward") 戦闘終了
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import { listen } from '@/plugins/firebase';
import Creature from '@/models/Creature';

@Component
export default class EncounterBattle extends Vue {
  @Prop() private sessionId!: string;
  @Prop() private encounterId!: string;

  private unsubscribe: any;

  private created() {
    this.unsubscribe = listen<Creature>(
      Creature,
      'encounterId',
      this.encounterId,
    );
  }

  private destroyed() {
    this.unsubscribe();
  }

  private get creatures() {
    return this.$store.getters.creatures(this.encounterId);
  }
}
</script>
