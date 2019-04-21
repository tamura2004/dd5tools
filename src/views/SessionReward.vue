<template lang="pug">
list-header(title="セッション報酬" icon="loop" @click="reroll")
  table
    tr
      th.label.body-2 硬貨
      td.body-2  {{ encounter.goldDescription }}
    tr
      th.label.body-2 アイテム
      td.body-2 {{ encounter.itemDescription }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Encounter from '@/models/Encounter';

@Component
export default class SessionReward extends Vue {
  private encounter = new Encounter({});

  private reroll() {
    this.encounter = new Encounter({});
  }
}
</script>
