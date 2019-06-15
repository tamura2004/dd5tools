<template lang="pug">
span 攻撃+{{ toHit }}{{ rangeDescription }}、ヒット：{{ weapon.damage }}+{{ abilityMod }}[{{ weapon.type }}]ダメージ
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { expToLevel } from '@/data/EXP';
import Guild from '@/models/Guild';
import Player from '@/models/Player';
import Weapon from '@/models/Weapon';

@Component
export default class WeaponDescription extends Vue {
  @Prop() private player!: Player;
  @Prop() private weapon!: Weapon;

  private get guilds() {
    return this.$store.state.guilds;
  }

  private modify(ability: number): number {
    return Math.floor((ability - 10) / 2);
  }

  private get ability(): number[] {
    if (this.player.ability === undefined) {
      return [10, 10, 10, 10, 10, 10];
    } else {
      return this.player.ability;
    }
  }

  private get str(): number {
    return this.ability[0];
  }

  private get dex(): number {
    return this.ability[1];
  }

  private get strMod(): number {
    return this.modify(this.str);
  }

  private get dexMod(): number {
    return this.modify(this.dex);
  }

  private get isRange(): boolean {
    return this.weapon.category.includes('遠隔');
  }

  private get isFinesse(): boolean {
    return this.weapon.special.includes('妙技');
  }

  private get level(): number {
    const guild = this.guilds.get(this.player.guildId);
    return guild ? expToLevel(guild.exp) : 1;
  }

  private get profMod(): number {
    return Math.floor((this.level + 7) / 4);
  }

  private get abilityMod(): number {
    if (this.isRange) {
      return this.dexMod;
    }
    if (!this.isFinesse) {
      return this.strMod;
    }
    return this.strMod > this.dexMod ? this.strMod : this.dexMod;
  }

  private get toHit(): number {
    return this.profMod + this.abilityMod;
  }

  private get rangeDescription(): string {
    if (this.weapon.range === '') {
      return '';
    } else {
      return `、射程: ${this.weapon.range}`;
    }
  }
}
</script>
