<template lang="pug">
  .headline Encounter
    v-tabs
      v-tab(:to="{ name: 'encounter/battle' }") 戦闘
      v-tab(:to="{ name: 'encounter/reward' }") 報酬
      v-tab(:to="{ name: 'encounter/rest' }") 休憩
    router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Encounter extends Vue {
}
</script>
