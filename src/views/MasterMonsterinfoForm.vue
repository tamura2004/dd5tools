<template lang="pug">
  v-form(v-model="valid" ref="form")
    v-layout(row wrap)
      //- v-flex.px-2(xs2 md1): IconSelect(v-model="monsterinfo.avatar")
      v-flex.px-2(xs8 md4)
        v-text-field(
          label="キャラクター名"
          v-model="monsterinfo.characterName"
          :rules="required"
        )
      v-flex.px-2(xs4 md2)
        v-text-field(
          label="プレイヤー名"
          v-model="monsterinfo.name"
          :rules="required"
        )
      v-flex.px-2(xs4 md4): SelectKlass(v-model="monsterinfo.klass")
      v-flex.px-2(xs2 md2)
        v-select(
          label="レベル"
          :items="[1,2,3,4,5,6,7,8,9,10]"
          v-model.number="monsterinfo.level"
          :rules="required"
        )
      v-flex.px-2(xs6 md3): SelectRace(v-model="monsterinfo.race")
      v-flex.px-2(xs4 md3): SelectAlignment(v-model="monsterinfo.alignment")
      v-flex.px-2(xs4 md2): SelectBackground(v-model="monsterinfo.background")
      v-flex.px-2(xs2 md2)
        v-text-field(
          label="hp"
          v-model.number="monsterinfo.maxHp"
          mask="###"
          :rules="required"
        )
      v-flex.px-2(xs2 md2)
        v-text-field(
          label="exp"
          v-model="monsterinfo.exp"
          mask="#####"
        )
      v-flex.px-2(xs2 md2 v-for="i in 6" :key="'ability' + i")
        v-select(
          :label="abilityLabel[i-1]"
          :items="abilityRange"
          v-model="monsterinfo.baseAbility[i-1]"
          :rules="required"
        )
        h4 {{ ability[i-1] }}

      v-flex.px-2(xs12)
        v-select(
          v-model="monsterinfo.saves"
          :items="['筋力','敏捷','耐久','知力','判断','魅力']"
          chips
          multiple
          label="セーヴ"
        )
      v-flex.px-2(xs12): SelectSkill(v-model="monsterinfo.skills")
      v-flex.px-2(xs12): v-textarea(label="メモ" v-model="monsterinfo.memo")
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
  @Prop() private monsterinfoId!: string;

  private monsterinfo: Player = new Player({});
  private abilityLabel: string[] = ABILITY_LABEL;
  private abilityRange: number[] = ABILITY_RANGE;
  private armorName: string[] = ARMOR_NAME;
  private valid: boolean = false;

  private required: Validation[] = [
    (v) => !!v || '必須項目です',
  ];

  private get ability(): string[] {
    const ret = this.monsterinfo.abilityWithMod;
    if (typeof ret !== 'undefined') {
      return ret;
    } else {
      return ['-', '-', '-', '-', '-', '-'];
    }
  }

 private weaponDescription(i: number): string {
    const selected = this.monsterinfo.weapon[i];
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
    const selected = this.monsterinfo.armor;
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
      this.monsterinfo.hp = this.monsterinfo.maxHp;
      if (this.monsterinfoId !== 'new') {
        db.collection('monsterinfos').doc(this.monsterinfoId).set({...this.monsterinfo})
          .then((doc: any) => this.$router.push('../../monsterinfos'))
          .catch((error) => alert(error));
      } else {
        db.collection('monsterinfos').add({...this.monsterinfo})
          .then((doc) => this.$router.push('../../monsterinfos'))
          .catch((error) => alert(error));
      }
    } else {
      (this.$refs.form as Vue & {validate: () => boolean}).validate();
      alert('エラー：未入力項目があります');
    }
  }

  private created(): void {
    if (this.monsterinfoId === 'new') {
      this.monsterinfo.rollAbility();
      this.monsterinfo.exp = 0;
    } else {
      const monsterinfo = this.$store.state.monsterinfos[this.monsterinfoId];
      if (monsterinfo !== undefined) {
        Object.assign(this.monsterinfo, monsterinfo);
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
