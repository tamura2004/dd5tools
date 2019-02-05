<template lang="pug">
  v-app
    v-toolbar(app)
      v-btn(icon to="/"): v-icon clear
      v-toolbar-title キャラクター作成
      v-btn(absolute dark fab bottom right color="blue" @click="save")
        v-icon save
    v-container.pa-2
      v-form(v-model="valid" ref="form")
        v-layout(row wrap)
          v-flex.pa-2(xs2 md1)
            IconSelect(v-model="player.avatar")
          v-flex.pa-2(xs6 md3)
            v-text-field(
              label="キャラクター名"
              v-model="player.characterName"
              :rules="characterNameRules"
            )
          v-flex.pa-2(xs4 md2)
            v-text-field(
              label="プレイヤー名"
              v-model="player.name"
              :rules="nameRules"
            )
          v-flex.pa-2(xs8 md4)
            v-select(
              label="クラス"
              :items="klass"
              v-model="player.klass"
              :rules="klassRules"
            )
          v-flex.pa-2(xs4 md2)
            v-select(
              label="レベル"
              :items="[1,2,3,4,5,6,7,8,9,10]"
              v-model="player.level"
              :rules="levelRules"
            )
          v-flex.pa-2(xs6 md3)
            v-select(
              label="種族"
              :items="races"
              v-model="player.race"
              :rules="raceRules"
            )
          v-flex.pa-2(xs6 md3)
            v-select(
              label="属性"
              :items="alignment"
              v-model="player.alignment"
              :rules="alignmentRules"
            )
          v-flex.pa-2(xs6 md2)
            v-select(
              label="背景"
              :items="background"
              v-model="player.background"
              :rules="backgroundRules"
            )
          v-flex.pa-2(xs3 md2)
            v-text-field(
              label="hp"
              v-model="player.hp"
              mask="###"
              :rules="hpRules"
            )
          v-flex.pa-2(xs3 md2)
            v-text-field(
              label="exp"
              v-model="player.exp"
              mask="#####"
            )
          v-flex.pa-2(xs4 md2 v-for="i in 6" :key="'ability' + i")
            v-select(
              :label="abilityLabel[i-1]"
              :items="abilityRange"
              v-model="player.baseAbility[i-1]"
              :rules="abilityRules"
            )
            h4 {{ ability[i-1] }}
          //- // weapon
          //- template(v-for="key in [0,1]")
          //-   v-flex.pa-2(xs12 md4 lg2)
          //-     WeaponList(v-model="player.weapon[key]")
          //-   v-flex.pa-2(xs12 md8 lg4)
          //-     p.text {{ weaponDescription(key) }}
          //- // armor
          //- v-flex.pa-2(xs12 md4)
          //-   v-select(
          //-     label="防具"
          //-     :items="armorName"
          //-     v-model="player.armor"
          //-     :rules="armorRules"
          //-   )
          //- v-flex.pa-2(xs4 md2)
          //-   v-switch(label="盾" color="primary")
          //- v-flex.pa-2(xs8 md6)
          //-   p.text {{ armorDescription }}
          v-flex.pa-2(xs12)
            v-textarea(label="メモ" v-model="player.memo")
    v-card-actions
      v-spacer
      v-btn(color="primary" @click="save") 保存
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
  WEAPON,
  ARMOR_NAME,
  ARMOR,
} from '@/data/DATA';
import WeaponList from '@/components/WeaponList.vue';
import IconSelect from '@/components/IconSelect.vue';
import Vuetify from 'vuetify/lib';
import { db } from '@/plugins/firebase';

type Validation = (v: string) => boolean | string;

@Component({
  components: {
    WeaponList,
    IconSelect,
  },
})
export default class PlayerForm extends Vue {
  public player: Player = new Player({});
  public races: string[] = RACES;
  public alignment: string[] = ALIGNMENT;
  public background: string[] = BACKGROUND;
  public klass: string[] = KLASS;
  public abilityLabel: string[] = ABILITY_LABEL;
  public abilityRange: number[] = ABILITY_RANGE;
  public armorName: string[] = ARMOR_NAME;
  public valid: boolean = false;
  public characterNameRules: Validation[] = [
    (v) => !!v || 'キャラクター名を入力してください',
  ];
  public nameRules: Validation[] = [
    (v) => !!v || 'プレイヤー名を入力してください',
  ];
  public klassRules: Validation[] = [
    (v) => !!v || 'クラスを選択してください',
  ];
  public levelRules: Validation[] = [
    (v) => !!v || 'レベルを選択してください',
  ];
  public raceRules: Validation[] = [
    (v) => !!v || '種族を選択してください',
  ];
  public alignmentRules: Validation[] = [
    (v) => !!v || '属性を選択してください',
  ];
  public backgroundRules: Validation[] = [
    (v) => !!v || '背景を選択してください',
  ];
  public hpRules: Validation[] = [
    (v) => !!v || 'hpを入力してください',
  ];
  public abilityRules: Validation[] = [
    (v) => !!v || '能力値を入力してください',
  ];
  public armorRules: Validation[] = [
    (v) => !!v || '防具を選択してください',
  ];
  @Prop() private id!: string;

  public get ability(): string[] {
    const ret = this.player.abilityWithMod;
    if (typeof ret !== 'undefined') {
      return ret;
    } else {
      return ['-', '-', '-', '-', '-', '-'];
    }
  }

 public weaponDescription(i: number): string {
    const selected = this.player.weapon[i];
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

  private save(): void {
    if (this.valid) {
      if (typeof this.player.id !== 'undefined') {
        db.collection('players').doc(this.id).set({...this.player})
          .then((doc) => this.$router.push('/players'))
          .catch((error) => alert(error));
      } else {
        db.collection('players').add({...this.player})
          .then((doc) => this.$router.push('/players'))
          .catch((error) => alert(error));
      }
    } else {
      (this.$refs.form as Vue & {validate: () => boolean}).validate();
      alert('エラー：未入力項目があります');
    }
  }

  private created(): void {
    if (this.id === 'new') {
      delete this.player.id;
      this.player.rollAbility();
      this.player.exp = 0;
    } else {
      db.collection('players').doc(this.id).get()
        .then((doc) => {
          this.player = new Player({
            id: doc.id,
            ...doc.data(),
          });
        })
        .catch((e) => alert(e));
    }
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

