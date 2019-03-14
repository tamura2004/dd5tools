<template lang="pug">
  .headline {{ [...creatures.values()] }}
    v-list
      template(v-for="creature in creatures")
        v-list-tile
          v-list-tile-title {{ creature.name }}
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
    return [...this.$store.state.creatures.values()];
  }
}
</script>
