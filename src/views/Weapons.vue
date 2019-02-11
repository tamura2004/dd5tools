<template lang="pug">
  v-app
    v-toolbar(color="green darken-3" dark app)
      v-btn(icon @click="$router.go(-1)"): v-icon clear
      v-toolbar-title.white--text 武器一覧
      v-spacer
      v-btn(icon): v-icon search
      v-btn-toggle.transparent(v-for="(group, key) in groups" :key="key" v-model="group.select")
        v-btn(
          color="green darken-3"
          v-for="label in group.labels"
          :key="label"
          :value="label"
        ) {{ label }}
    v-content
      v-container(grid-list-lg fluid)
        v-layout(row wrap align-space-around)
          v-flex(xs6 sm3 md2 v-for="weapon in weapons" :key="weapon.name")
            WeaponCard(:weapon="weapon" @input="select($event)")

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
  private groups = {
    type: {
      select: '',
      labels: ['軍用', '単純'],
    },
    range: {
      select: '',
      labels: ['近接', '遠隔'],
    },
    damage: {
      select: '',
      labels: ['殴打', '斬撃', '刺突'],
    },
  };

  private get weapons(): Weapon[] {
    const [ type, range, damage ] = Object.values(this.groups).map((group) => group.select);
    return [...WEAPON.values()].filter((weapon) =>
      (type === '' || type === undefined || type === weapon.category.slice(0, 2)) &&
      (range === '' || range === undefined || range === weapon.category.slice(2, 4)) &&
      (damage === '' || damage === undefined || damage === weapon.type),
    );
  }

  private select(weapon: Weapon): void {
    this.$store.dispatch('addWeapon', weapon);
    this.$router.go(-1);
  }
}
</script>

<style lang="stylus">
</style>
