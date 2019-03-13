<template lang="pug">
  .headline セッション報酬
    table
      tr
        th.label.body-2 経験値
        td.body-2 一人当たり1200exp
      tr
        th.label.body-2 硬貨
        td.body-2 一人当たり370gp
      tr
        th.label.body-2 アイテム
        td.body-2
          .body-2 オイントメント
          .body-2 オイントメント
          .body-2 オイントメント
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SessionReward extends Vue {
}
</script>
