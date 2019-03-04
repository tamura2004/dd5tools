<template lang="pug">
  v-app
    v-toolbar(app flat dark dense)
      v-btn(icon @click="$router.go(-1)"): v-icon arrow_back_ios
      v-toolbar-title {{ item && item.characterName }}
      v-spacer
      v-btn(icon @click="edit"): v-icon edit
    v-content(v-if="item")
      v-list(dense)
        v-list-tile
          v-list-tile-avatar(tile)
            v-img(:src="`/img/${item.avatar}`")
          v-list-tile-content
            v-list-tile-title
              v-layout
                v-flex(xs6) {{ item.klass }} {{ item.level}}レベル
                v-flex(xs6) {{ item.race }}/{{ item.background }}
            v-list-tile-sub-title
              v-layout
                v-flex(xs6) {{ item.alignment }}
                v-flex(xs3) PL:{{ item.name }}
                v-flex(xs3) EXP:{{ item.exp }}
        table.mb-1
          tr
            td.label AC
            td.number {{ item.ac }}
            td.label MV
            td.number 30'
            td.label hp
            td.number {{ item.hp }}
            td.label PB
            td.number +2
        table
          tr(v-for="n in 6")
            td.label {{ abilityLabel[n-1] }}
            td.number {{ item.ability[n-1] }}
            td.number {{ item.abilityMod[n-1] }}
            td.number {{ item.saves.includes(abilityLabel[n-1]) ? '●' : '' }}
            td.skill {{ skillDisplay[n-1].join('、') }}

        ListHeader(title="武器" icon="add" @click="$router.push('/weapons')")
        template(v-for="(w, i) in weapons")
          v-list-tile
            v-list-tile-action(@click="$store.dispatch('deleteWeapon', i)"): v-icon clear
            v-list-tile-content
              v-list-tile-title {{ item.weapon[i] }}：{{ w.category }}
              v-list-tile-sub-title 攻撃+{{ item.toHit(w) }}、間合い{{ w.range }}、ヒット：{{ w.damage }}+{{ item.toHit(w) }}[{{ w.type }}]ダメージ
            v-list-tile-action: v-icon keyboard_arrow_right
          v-divider

        ListHeader(title="呪文" icon="add" @click="$router.push('/spells')")
        template(v-for="(spell, key) of spells")
          v-list-tile
            v-list-tile-action(@click="$store.dispatch('deleteSpell', key)"): v-icon clear
            v-list-tile-content
              v-list-tile-title {{ spell && spell.name }}
              v-list-tile-sub-title {{ spell && spell.klass }}/{{ spell && spell.level }}lv
            v-list-tile-action(@click="$router.push(`/spellForm/${key}`)")
              v-icon keyboard_arrow_right
          v-divider


        ListHeader(title="特技・クラス能力" icon="add")
        v-list-tile
          v-list-tile-content
            v-list-tile-title {{ item.memo }}
          v-list-tile-action: v-icon keyboard_arrow_right
        v-divider

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import LifeCounter from '@/components/LifeCounter.vue';
import IconSelect from '@/components/IconSelect.vue';
import ListHeader from '@/components/ListHeader.vue';
import { Player } from '@/models/Player';
import Spell from '@/models/Spell';
import { ABILITY_LABEL, WEAPON, SKILLS } from '@/data/DATA';
import { Weapon } from '@/models/Weapon';
import { db } from '@/plugins/firebase';

@Component({
  components: {
    LifeCounter,
    IconSelect,
    ListHeader,
  },
})
export default class PlayerCard extends Vue {
  private abilityLabel = ABILITY_LABEL;
  private skills = SKILLS;
  private hp: number = 0;
  @Prop() private id!: string;

  private get alert(): boolean {
    return this.$store.state.alert;
  }

  private get alertMsg(): string {
    return this.$store.state.alertMsg;
  }

  private get item(): Player | undefined {
    return this.$store.state.items[this.id];
  }

  private get weapons(): Weapon[] {
    if (this.item === undefined) {
      return [];
    }

    const result: Weapon[] = [];
    for (const name of this.item.weapon) {
      const weapon = WEAPON.get(name);
      if (weapon !== undefined) {
        result.push(weapon);
      }
    }
    return result;
  }

  private get spells(): { [key: string]: Spell } {
    const result: { [key: string]: Spell } = {};
    if (this.item !== undefined) {
      this.item.spells.forEach((spellId) => {
        result[spellId] = this.$store.state.spells[spellId];
      });
    }
    return result;
  }

  private get skillDisplay(): string[][] {
    return this.skills.map((list) =>
      list.map((skill) =>
        (!!this.item && this.item.skills.includes(skill)) ? `●${skill}` : skill,
      ),
    );
  }

  private edit(): void {
    this.$router.push(`/itemForm/${this.id}`);
  }

  private mounted(): void {
    this.$store.commit('setCurrentPlayerId', this.id);
  }

}
</script>

<style lang="stylus">
.center
  text-align center
.border
  border 1px black solid

table
  width 100%
  border solid 1px grey
  border-collapse collapse

tr
  height 32px

td
  border solid 1px grey
  padding 0 2px

td.label
  text-align center
  width 48px
  background-color #212121 
  color white

td.number
  text-align center
  width 32px

</style>
