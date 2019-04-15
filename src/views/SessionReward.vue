<template lang="pug">
  .headline セッション報酬
    table
      tr
        th.label.body-2 経験値
        td.body-2 一人当たり1200exp
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
}
</script>
