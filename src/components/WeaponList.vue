<template lang="pug">
  v-layout(row justify-center)
    v-dialog(
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    )
      v-select(
        slot="activator"
        label="武器"
        :items="weaponName"
        v-model="value"
        :rules="weaponRules"
      )
      v-card
        v-toolbar(color="green darken-3" dark)
          v-btn(icon @click="dialog=false"): v-icon chevron_left
          v-toolbar-title.white--text カードをタップして選択
          v-spacer
          v-btn(icon): v-icon search
          v-btn-toggle.transparent(v-model="type")
            v-btn(
              color="green darken-3"
              v-for="type in types"
              :key="type"
              :value="type"
            ) {{ type }}
          v-btn-toggle.transparent(v-model="range")
            v-btn(
              color="green darken-3"
              v-for="range in ranges"
              :key="range"
              :value="range"
            ) {{ range }}
          v-btn-toggle.transparent(v-model="damage")
            v-btn(
              color="green darken-3"
              v-for="damage in damages"
              :key="damage"
              :value="damage"
            ) {{ damage }}
        v-container(grid-list-lg fluid)
          v-layout(row wrap fill-height align-space-around)
            v-flex(xs6 sm3 md2 lg2 v-for="weapon in weapons" :key="weapon.name")
              WeaponCard(:weapon="weapon" @input="select($event)")

        //- v-toolbar
        //-   v-toolbar-title 武器を選択してください
        //- template(v-for="weapon in weapons")
        //-   v-list(two-line)
        //-     v-list-tile(@click="select(weapon)")
        //-       v-list-tile-content
        //-         v-list-tile-title {{ weapon.name }}
        //-         v-list-tile-sub-title {{ weapon.description }}
        //-   v-divider
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Weapon } from '@/models/Weapon';
import WeaponCard from '@/components/WeaponCard.vue';
import { WEAPON, WEAPON_NAME } from '@/data/DATA';

type Validation = (v: string) => boolean | string;

@Component({
  components: {
    WeaponCard,
  },
})
export default class WeaponList extends Vue {
  @Prop() private value!: string;
  private type: string = '';
  private range: string = '';
  private damage: string = '';

  private types: string[] = [
    '軍用',
    '単純',
  ];
  private ranges: string[] = [
    '近接',
    '遠隔',
  ];
  private damages: string[] = [
    '殴打',
    '斬撃',
    '刺突',
  ];

  private weaponRules: Validation[] = [
    (v) => !!v || '武器を選択してください',
  ];
  private dialog: boolean = false;
  private weaponName: string[] = WEAPON_NAME;

  private get weapons(): Weapon[] {
    return [...WEAPON.values()].filter((weapon) =>
      (this.type === '' || this.type === undefined || this.type === weapon.category.slice(0, 2)) &&
      (this.range === '' || this.range === undefined || this.range === weapon.category.slice(2, 4)) &&
      (this.damage === '' || this.damage === undefined || this.damage === weapon.type),
    );
  }

  private select(weapon: Weapon): void {
    this.$emit('input', weapon.name);
    this.dialog = false;
  }
}
</script>

<style lang="stylus">
</style>
