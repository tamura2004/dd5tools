<template lang="pug">
  v-card
    v-toolbar(color="primary" dark)
      v-toolbar-title ジェイス・ベレレン
    v-card-title.pa-2
      h2 マジックユーザー：１レベル、人間、秩序にして中立
    v-divider
    v-list(three-line)
      v-list-tile
        v-list-tile-action
          v-icon face
        v-list-tile-content
          v-list-tile-title AC: 10
          v-list-tile-title hp: 5
          v-list-tile-title 移動速度: 30フィート
          v-list-tile-title 習熟ボーナス：+2
    v-divider
    v-list.my-1
      v-list-tile
        v-list-tile-action
          v-icon build
        v-list-tile-content
          v-list-tile-title
            v-layout
              v-flex(xs2) 【筋】
              v-flex(xs2) 【敏】
              v-flex(xs2) 【耐】
              v-flex(xs2) 【知】
              v-flex(xs2) 【判】
              v-flex(xs2) 【魅】
          v-list-tile-title
            v-layout
              v-flex(xs2) 9(-1)
              v-flex(xs2) 9(-1)
              v-flex(xs2) 9(-1)
              v-flex(xs2) 15(+2)
              v-flex(xs2) 15(+2)
              v-flex(xs2) 15(+2)

    v-divider
    v-list(three-line)
      v-list-tile
        v-list-tile-action
          v-icon router
        v-list-tile-content
          v-list-tile-title 〈魔法学〉+4、〈歴史〉+4

    v-divider
    v-card-title.pa-2
      h2 アクション
    v-card-text.subheading スタッフ：近接武器攻撃：攻撃+1、間合い5フィート、目標1つ。ヒット：1d6-1[殴打]ダメージ
    v-card-text.subheading ファイア：遠隔魔法攻撃：攻撃+4、間合い60フィート、目標1つ。ヒット：1d10+2[火]ダメージ

    v-divider
    v-card-title.pa-2
      h2 特殊能力
    v-card-text.subheading 呪文行使

</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';

  @Component
  export default class Player extends Vue {
    @Prop() private num!: number;
  }
</script>

<style lang="stylus">
</style>
