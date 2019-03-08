<template lang="pug">
  v-list(dense v-if="monsterInfo")
    v-list-tile
      v-list-tile-title {{ monsterInfo.name }}
    v-divider
    v-list-tile
      v-list-tile-sub-title {{ monsterInfo.size }}・{{ monsterInfo.type }}、{{ monsterInfo.alignment }}
    v-divider
    v-list-tile
      v-list-tile-sub-title
        v-layout
          v-flex(xs3) AC: {{ monsterInfo.ac }}
          v-flex(xs3) {{ monsterInfo.maxHp }}
          v-flex(xs6) 脅威度: {{ monsterInfo.cr }} ({{ monsterInfo.exp }}exp)
        v-layout
          v-flex(xs12) 移動速度: {{ monsterInfo.mv }}
    v-divider
    v-list-tile
      v-list-tile-content
        v-list-tile-sub-title
          v-layout
            v-flex(xs2) 【筋】
            v-flex(xs2) 【敏】
            v-flex(xs2) 【耐】
            v-flex(xs2) 【知】
            v-flex(xs2) 【判】
            v-flex(xs2) 【魅】
        v-list-tile-title
          v-layout
            v-flex(xs2 v-for="i in 6" :key="i") {{ monsterInfo.abilityString(i - 1) }}

    v-divider
    v-list-tile(v-for="attribute in monsterInfo.attributes" :key="attribute")
      v-list-tile-sub-title {{ attribute }}

    v-divider
    div(v-for="action in monsterInfo.actions" :key="action")
      p.caption.mx-4 {{ action }}

    v-divider
    v-list-tile(v-for="special in monsterInfo.specials" :key="special")
      v-list-tile-sub-title {{ special }}
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';
  import MONSTER_INFOS from '@/data/MONSTERS';
  import MonsterInfo from '@/models/MonsterInfo';

  @Component
  export default class MasterMonsterSheeet extends Vue {
    @Prop() private monsterId!: number;

    private get monsterInfo(): MonsterInfo {
      return MONSTER_INFOS[this.monsterId];
    }
  }
</script>

<style lang="stylus">
  .center
    text-align center
</style>
