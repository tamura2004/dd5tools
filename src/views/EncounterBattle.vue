<template lang="pug">
  .headline EncounterBattle
    v-btn(to="reward") 戦闘終了
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class EncounterBattle extends Vue {
}
</script>
