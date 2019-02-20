<template lang="pug">
  div(@click="go")
    v-list-tile.my-1.elevation-4
      v-list-tile-avatar
        v-btn.font-weight-bold(fab dark small :color="color") {{ difficulty }}
      v-list-tile-content
        v-list-tile-title
          v-layout
            v-flex(xs12) {{ monster.name }}
        v-list-tile-sub-title
          v-layout
            v-flex(xs3) {{ monster.num }} 体
            v-flex(xs3) AC: {{ monster.ac }}
            v-flex(xs3) hp: {{ monster.hp }}
            v-flex(xs3) exp:{{ monster.totalExp }}

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import MonsterInfo from '@/models/MonsterInfo';
import MONSTER_INFOS from '@/data/MONSTERS';

@Component
export default class MonsterList extends Vue {
  @Prop() private id!: number;

  private get monster(): MonsterInfo {
    return MONSTER_INFOS[this.id];
  }
  private get color(): string {
    const COLORS = ['green', 'blue', 'blue', 'blue', 'red', 'black'];
    return COLORS[this.id - 1] || 'error';
  }
  private get difficulty(): string {
    const DIFFICULTY = ['簡単', '通常', '通常', '通常', '困難', '死地'];
    return DIFFICULTY[this.id - 1] || 'error';
  }
  private go(): void {
    this.$router.push(`/monster/${this.id}`);
  }
}
</script>

<style lang="stylus">
</style>
