<template lang="pug">
  div
    v-list-tile(@click="go")
      v-list-tile-content
        v-list-tile-title
          v-layout
            v-flex(xs12) {{ monster.name }}
        v-list-tile-sub-title
          v-layout
            v-flex(xs3) AC: {{ monster.ac }}
            v-flex(xs3) hp: {{ monster.hp }}
            v-flex(xs3) exp:{{ monster.exp }}
      v-list-tile-action
        v-icon keyboard_arrow_right

    v-divider

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Monster from '@/models/Monster';
import MONSTER_INFOS from '@/data/MONSTERS';

@Component
export default class MonsterCard extends Vue {
  @Prop() private id!: number;

  private get monster(): Monster {
    return MONSTER_INFOS[this.id];
  }

  private go(): void {
    this.$router.push(`/monster/${this.id}`);
  }
}
</script>

<style lang="stylus">
</style>
