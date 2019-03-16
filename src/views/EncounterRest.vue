<template lang="pug">
  .headline EncounterRest
    .body-1
      | 【小休憩】
      | 1時間の休憩、レベルと同じ数までのヒットダイスを消費してhpを回復できる。
      | 各ダイスに【耐久力】修正を加える。ヒットダイス自体は【大休憩】まで回復しない。
    .body-1
      | 【大休憩】
      | 8時間の休息。hpは全て回復する。ヒットダイスは最大値の半分（切り上げ）回復する。
    v-btn(to="/") セッション終了
    v-btn(to="/encounters/new") 次の遭遇へ
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class EncounterRest extends Vue {
}
</script>
