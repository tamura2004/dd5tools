<template lang="pug">
table
  tr
    th(xs4).label.body-2 名称
    td(xs8).body-2 {{ monster.name }}
  tr
    th(xs4).label.body-2 種類
    td(xs8).body-2 {{ monster.size }}の{{ monster.type }}
  tr
    th(xs4).label.body-2 属性
    td(xs8).body-2 {{ monster.alignment }}
  tr
    th(xs4).label.body-2 経験値
    td(xs8).body-2 {{ monster.exp }}exp
  tr
    th(xs4).label.body-2 AC
    td(xs8).body-2 {{ monster.ac }}
  tr
    th(xs4).label.body-2 hp
    td(xs8).body-2 {{ monster.maxHp }}
  tr
    th(xs4).label.body-2 移動力
    td(xs8).body-2 {{ monster.mv }}
  tr
    th(xs4).label.body-2 能力値
    td(xs8).body-2
      ability-label(:ability="monster.ability")
  tr
    th(xs4).label.body-2 能力
    td(xs8).body-2
      .body-1(v-for="attribute in monster.attributes") {{ attribute }}
  tr
    th(xs4).label.body-2 アクション
    td(xs8).body-2
      .body-1(v-for="action in monster.actions") {{ action }}
  tr
    th(xs4).label.body-2 特殊能力
    td(xs8).body-2
      .body-1(v-for="special in monster.specials") {{ special }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Monster from '@/models/Monster';

@Component
export default class MonsterTable extends Vue {
  @Prop() private monster!: Monster;
}
</script>

<style lang="stylus" scoped>
th.label
  text-align center
  width 48px
  background-color #212121
  color white
  width 15%
td.body-2
  line-height 24px
</style>
