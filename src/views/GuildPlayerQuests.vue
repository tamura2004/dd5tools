<template lang="pug">
  v-layout(row wrap)
    v-flex.text-xs-center(xs12)
      .headline.my-3 クエスト掲示板
    v-flex.pa-2(xs4 sm3 md2 v-for="i in 9" :key="i")
      v-card(flat dark :color="color(i)")
        v-responsive(:aspect-ratio="8/1")
          v-card-text.py-1.caption 採取依頼
      v-card
        v-responsive(:aspect-ratio="8/7")
          v-card-text.pt-1.pb-0.caption 依頼人：おばば
          v-card-text.pt-1.pb-0.caption 報酬：500gp
          v-card-text.pt-1.pb-0.caption 期日：明日まで
          v-chip.white--text(
            :color="color(i)"
            @click="$router.push(`quest/${i}`)"
          ) {{ label(i) }}
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class GuildPlayerQuests extends Vue {
    private color(i: number): string {
      return i === 8 ? 'warning' : 'primary';
    }
    private label(i: number): string {
      return i === 8 ? '報告' : '受注';
    }
  }
</script>

<style lang="stylus" scoped>
</style>
