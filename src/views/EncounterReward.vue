<template lang="pug">
  .headline EncounterReward
    v-btn(to="rest") 休憩へ

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class EncounterReward extends Vue {
}
</script>
