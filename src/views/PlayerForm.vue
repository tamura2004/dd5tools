<template lang="pug">
  v-form(v-model="valid" ref="form")
    v-layout(row wrap)
      v-flex.px-2(xs2 md1): IconSelect(v-model="player.avatar")
      v-flex.px-2(xs6 md3)
        v-text-field(
          label="キャラクター名"
          v-model="player.characterName"
          :rules="required"
        )
      v-flex.px-2(xs4 md2)
        v-text-field(
          label="プレイヤー名"
          v-model="player.name"
          :rules="required"
        )
      v-flex.px-2(xs4 md4): SelectKlass(v-model="player.klass")
      v-flex.px-2(xs2 md2)
        v-select(
          label="レベル"
          :items="[1,2,3,4,5,6,7,8,9,10]"
          v-model.number="player.level"
          :rules="required"
        )
      v-flex.px-2(xs6 md3): SelectRace(v-model="player.race")
      v-flex.px-2(xs4 md3): SelectAlignment(v-model="player.alignment")
      v-flex.px-2(xs4 md2): SelectBackground(v-model="player.background")
      v-flex.px-2(xs2 md2)
        v-text-field(
          label="hp"
          v-model.number="player.maxHp"
          mask="###"
          :rules="required"
        )
      v-flex.px-2(xs2 md2)
        v-text-field(
          label="exp"
          v-model="player.exp"
          mask="#####"
        )
      v-flex.px-2(xs2 md2 v-for="i in 6" :key="'ability' + i")
        v-select(
          :label="abilityLabel[i-1]"
          :items="abilityRange"
          v-model="player.baseAbility[i-1]"
          :rules="required"
        )
        h4 {{ ability[i-1] }}

      v-flex.px-2(xs12)
        v-select(
          v-model="player.saves"
          :items="['筋力','敏捷','耐久','知力','判断','魅力']"
          chips
          multiple
          label="セーヴ"
        )
      v-flex.px-2(xs12): SelectSkill(v-model="player.skills")
      v-flex.px-2(xs12): v-textarea(label="メモ" v-model="player.memo")
      v-flex.px-2(xs12): v-btn(color="primary" :disabled="!valid" @click="save") 登録
</template>

<script lang="ts">
import { Player } from '@/models/Player';
import { Weapon } from '@/models/Weapon';
import { Component, Vue, Prop } from 'vue-property-decorator';
import {
  ABILITY_LABEL,
  ABILITY_RANGE,
  WEAPON,
  ARMOR_NAME,
  ARMOR,
} from '@/data/DATA';
import WeaponList from '@/components/WeaponList.vue';
import IconSelect from '@/components/IconSelect.vue';
import SelectAlignment from '@/components/select/Alignment.vue';
import SelectBackground from '@/components/select/Background.vue';
import SelectKlass from '@/components/select/Klass.vue';
import SelectRace from '@/components/select/Race.vue';
import SelectSkill from '@/components/select/Skill.vue';
import Vuetify from 'vuetify/lib';
import { db } from '@/plugins/firebase';

type Validation = (v: string) => boolean | string;

@Component({
  components: {
    WeaponList,
    IconSelect,
    SelectAlignment,
    SelectBackground,
    SelectKlass,
    SelectRace,
    SelectSkill,
  },
})
export default class PlayerForm extends Vue {
  @Prop() private id!: string;

  private player: Player = new Player({});
  private abilityLabel: string[] = ABILITY_LABEL;
  private abilityRange: number[] = ABILITY_RANGE;
  private armorName: string[] = ARMOR_NAME;
  private valid: boolean = false;

  private required: Validation[] = [
    (v) => !!v || '必須項目です',
  ];

  private get ability(): string[] {
    const ret = this.player.abilityWithMod;
    if (typeof ret !== 'undefined') {
      return ret;
    } else {
      return ['-', '-', '-', '-', '-', '-'];
    }
  }

 private weaponDescription(i: number): string {
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

  private get armorDescription(): string {
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
      this.player.hp = this.player.maxHp;
      if (this.id !== 'new') {
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
      this.player.rollAbility();
      this.player.exp = 0;
    } else {
      const player = this.$store.state.players[this.id];
      if (player !== undefined) {
        Object.assign(this.player, player);
      }
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
