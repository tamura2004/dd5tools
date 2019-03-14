<template lang="pug">
  .headline
    v-list
      template(v-for="[creatureId, creature] in Array.from(creatures)")
        v-list-tile
          v-list-tile-title {{ creature.name }}
          v-list-tile-title {{ creature.hp }}
    v-btn(to="reward") 戦闘終了
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

@Component
export default class EncounterBattle extends Vue {
  @Prop() private sessionId!: string;
  @Prop() private encounterId!: string;

  private get creatures() {
    return this.$store.getters.creatures(this.encounterId);
  }
}
</script>
