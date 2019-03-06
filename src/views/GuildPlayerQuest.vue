<template lang="pug">
v-container
  table.headline
    tr
      th 依頼人
      td 領主
    tr
      th 報酬
      td 2,500gp
    tr
      th 対象
      td 騎士３人の救出
    tr
      th 場所
      td アレクニ島　第３層
    tr
      th その他
      td カニ・オーガ１体ごとに1,000gpのボーナス。討伐証明部位として右のはさみを持ち帰ること。
  template(v-if="questId !== '8'")
    v-btn.headline.my-4(to="../quests" round block color="primary") 依頼を受ける
    v-btn.headline.my-4(to="../quests" round block) 掲示板に戻る
  template(v-if="questId === '8'")
    v-btn.headline.my-4(to="success" round block color="primary") 成功報告
    v-btn.headline.my-4(to="failure" round block color="warning") 失敗報告
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';

  @Component
  export default class GuildPlayerQuest extends Vue {
    @Prop() private questId!: string;
  }
</script>

<style lang="stylus" scoped>
th
  width 30%
  border solid 1px white
  background-color #1565C0
  color white
</style>
