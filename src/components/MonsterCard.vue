<template lang="pug">
  div
    v-list-tile(@click="go")
      v-list-tile-content
        v-list-tile-title
          v-layout
            v-flex(xs12) {{ monsterInfo.name }}
        v-list-tile-sub-title
          v-layout
            v-flex(xs3) AC: {{ monsterInfo.ac }}
            v-flex(xs3) hp: {{ monsterInfo.hp }}
            v-flex(xs3) exp:{{ monsterInfo.exp }}
      v-list-tile-action
        v-icon keyboard_arrow_right

    v-divider

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import MonsterInfo from '@/models/MonsterInfo';
import MONSTER_INFOS from '@/data/MONSTERS';

@Component
export default class MonsterCard extends Vue {
  @Prop() private id!: number;

  private get monsterInfo(): MonsterInfo {
    return MONSTER_INFOS[this.id];
  }

  private go(): void {
    this.$router.push(`/monster/${this.id}`);
  }
}
</script>

<style lang="stylus">
</style>
