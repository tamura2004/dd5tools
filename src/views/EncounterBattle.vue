<template lang="pug">
  .headline EncounterBattle
    v-list
      template(v-for="[creatureId, creature] in Array.from(creatures(encounterId))")
        v-list-tile
          v-list-tile-title {{ creature.name }}
    v-btn(to="reward") 戦闘終了
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

@Component({
  computed: {
    ...mapGetters(['creatures']),
  },
})
export default class EncounterBattle extends Vue {
  @Prop() private sessionId!: string;
  @Prop() private encounterId!: string;
}
</script>
