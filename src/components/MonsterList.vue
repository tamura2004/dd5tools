<template lang="pug">
v-list-tile.my-1.elevation-4
  v-list-tile-avatar
    v-btn.font-weight-bold(fab dark small :color="color") {{ label }}
  v-list-tile-content
    v-list-tile-title
      v-layout
        v-flex(xs12) {{ monster.name }}
    v-list-tile-sub-title
      v-layout
        v-flex(xs3) {{ num }} 体
        v-flex(xs3) AC: {{ monster.ac }}
        v-flex(xs3) hp: {{ monster.hp }}
        v-flex(xs3) exp:{{ monster.totalExp }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Monster from '@/models/Monster';
import MONSTERS from '@/data/MONSTERS';
import { MODE } from '@/data/ENCOUNTER_DATA';
import Mode from '@/models/Mode';

@Component
export default class MonsterList extends Vue {
  @Prop() private id!: number;
  @Prop() private num!: number;
  @Prop() private mode!: MODE;

  private get monster(): Monster {
    return MONSTERS[this.id];
  }
  private get color(): string {
    return Mode.color(this.mode);
  }
  private get label(): string {
    return Mode.label(this.mode);
  }
  private go(): void {
    this.$router.push(`/monster/${this.id}`);
  }
}
</script>

<style lang="stylus">
</style>
