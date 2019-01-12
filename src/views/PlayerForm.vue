<template lang="pug">
  v-card
    v-toolbar(color="primary" dark)
      v-toolbar-title キャラクターシート
    v-card-title.pa-2
      v-form
        v-layout(row wrap)
          v-flex.pa-2(xs8 sm4)
            v-text-field(label="キャラクター名" v-model="player.characterName")
          v-flex.pa-2(xs4 sm2)
            v-text-field(label="プレイヤー名" v-model="player.name")
          v-flex.pa-2(xs8 sm4)
            v-select(label="クラス" :items="klass" v-model="player.klass")
          v-flex.pa-2(xs4 sm2)
            v-select(label="レベル" :items="[1,2,3,4,5,6,7,8,9,10]" v-model="player.level")
          v-flex.pa-2(xs6 sm3)
            v-select(label="種族" :items="races" v-model="player.race")
          v-flex.pa-2(xs6 sm3)
            v-select(label="属性" :items="alignment" v-model="player.alignment")
          v-flex.pa-2(xs6 sm2)
            v-select(label="背景" :items="background" v-model="player.background")
          v-flex.pa-2(xs3 sm2)
            v-text-field(label="hp" v-model="player.hp" mask="###")
          v-flex.pa-2(xs3 sm2)
            v-text-field(label="exp" v-model="player.exp" mask="#####")
          v-flex.pa-2(xs4 sm2 v-for="i in 6")
            v-select(:label="abilityLabel[i-1]" :items="abilityRange" v-model="player.baseAbility[i-1]")
            h3 {{ ability[i-1] }}
          // weapon
          v-flex.pa-2(xs12 sm4)
            v-select(label="武器" :items="weaponName" v-model="player.weapon")
          v-flex.pa-2(xs12 sm8)
            p.text {{ weaponDescription }}
          // armor
          v-flex.pa-2(xs12 sm4)
            v-select(label="防具" :items="armorName" v-model="player.armor")
          v-flex.pa-2(xs12 sm8)
            p.text {{ armorDescription }}

          //- v-flex.pa-2(xs4 md2 v-for="a in ability"): h3 {{ a }}

</template>

<script lang="ts">
import { Player } from '@/models/Player';
import { Weapon } from '@/models/Weapon';
import { Component, Vue, Prop } from 'vue-property-decorator';
import {
  RACES,
  ALIGNMENT,
  BACKGROUND,
  KLASS,
  ABILITY_LABEL,
  ABILITY_RANGE,
  WEAPON_NAME,
  WEAPON,
  ARMOR_NAME,
  ARMOR,
} from '@/data/DATA';

@Component
export default class PlayerForm extends Vue {
  public player: Player = new Player({});
  public races: string[] = RACES;
  public alignment: string[] = ALIGNMENT;
  public background: string[] = BACKGROUND;
  public klass: string[] = KLASS;
  public abilityLabel: string[] = ABILITY_LABEL;
  public abilityRange: number[] = ABILITY_RANGE;
  public weaponName: string[] = WEAPON_NAME;
  public armorName: string[] = ARMOR_NAME;

  public get ability(): string[] {
    const ret = this.player.ability;
    if (typeof ret !== 'undefined') {
      return ret;
    } else {
      return ['-', '-', '-', '-', '-', '-'];
    }
  }

  public get weaponDescription(): string {
    const selected = this.player.weapon;
    if (typeof selected === 'undefined') {
      return '武器が選択されていません';
    } else {
      const data = WEAPON.get(selected);
      if (typeof data === 'undefined') {
        return 'データがありません';
      } else {
        return data.description;
      }
    }
  }

  public get armorDescription(): string {
    const selected = this.player.armor;
    if (typeof selected === 'undefined') {
      return '防具が選択されていません';
    } else {
      const data = ARMOR.get(selected);
      if (typeof data === 'undefined') {
        return 'データがありません';
      } else {
        return data.description;
      }
    }
  }

  private created(): void {
    this.player.rollAbility();
    this.player.exp = 0;
  }
}
</script>

<style scoped lang="stylus">
.text
  margin-top 4px
  padding-top 12px
  font-size 16px
  color rgba(0, 0, 0, 0.87)
</style>

