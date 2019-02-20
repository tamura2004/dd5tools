<template lang="pug">
  v-list-tile
    v-list-tile-avatar(tile)
      slot(name="avatar")
    v-list-tile-content(@click="$emit('click', id)")
      v-list-tile-title
        v-layout
          v-flex(xs12) {{ info.name }}
      v-list-tile-sub-title
        v-layout
          v-flex(xs12) {{ info.size }}・{{ info.type }}・{{ info.alignment }}
      v-list-tile-sub-title
        v-layout
          v-flex(xs4) AC: {{ info.ac }}
          v-flex(xs4) hp: {{ info.maxHp }}
          v-flex(xs4) exp:{{ info.exp }}
    v-list-tile-action
      slot(name="action")

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import MonsterInfo from '@/models/MonsterInfo';
import MONSTER_INFOS from '@/data/MONSTERS';

@Component
export default class MonsterInfoTile extends Vue {
  @Prop() private id!: number;
  private get info(): MonsterInfo {
    return MONSTER_INFOS[this.id];
  }
}
</script>

<style lang="stylus">
</style>
