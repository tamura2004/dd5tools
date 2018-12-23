<template lang="pug">
  div
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
            v-flex(xs3) AC:12
            v-flex(xs3) hp:5
            v-flex(xs3) exp:{{ monster.exp }}

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Monster from '@/models/Monster';

const EXPS = [200, 400, 400, 400, 600, 800];

@Component
export default class MonsterList extends Vue {
  @Prop() private row!: number;

  private get monster(): Monster {
    return Monster.random(EXPS[this.row - 1] || 400);
  }
  private get color(): string {
    const COLORS = ['green', 'blue', 'blue', 'blue', 'red', 'black'];
    return COLORS[this.row - 1] || 'error';
  }
  private get difficulty(): string {
    const DIFFICULTY = ['簡単', '通常', '通常', '通常', '困難', '死地'];
    return DIFFICULTY[this.row - 1] || 'error';
  }
}
</script>

<style lang="stylus">
</style>
