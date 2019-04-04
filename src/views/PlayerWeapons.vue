<template lang="pug">
  .headline 武器
    template(v-for="(w, i) in weapons")
      v-list-tile
        v-list-tile-action(@click="$store.dispatch('deleteWeapon', i)"): v-icon clear
        v-list-tile-content
          v-list-tile-title {{ player.weapon[i] }}：{{ w.category }}
          v-list-tile-sub-title 攻撃+{{ player.toHit(w) }}、間合い{{ w.range }}、ヒット：{{ w.damage }}+{{ player.toHit(w) }}[{{ w.type }}]ダメージ
        v-list-tile-action: v-icon keyboard_arrow_right
      v-divider
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Player from '@/models/Player';
import WEAPONS from '@/data/WEAPON_DATA';
import Weapon from '@/models/Weapon';

@Component
export default class PlayerWeapons extends Vue {
  @Prop() private playerId!: string;

  private get player(): Player | undefined {
    return this.$store.getters.player(this.playerId);
  }

  private get weapons(): Weapon[] {
    if (this.player === undefined) {
      return [];
    }
    const result: Weapon[] = [];
    if (this.player.weapon === undefined) {
      return [];
    }
    for (const name of this.player.weapon) {
      const weapon = WEAPONS.get(name);
      if (weapon !== undefined) {
        result.push(new Weapon(weapon));
      }
    }
    return result;
  }


}
</script>
