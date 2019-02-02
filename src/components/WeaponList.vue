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
        v-container(grid-list-lg fluid)
          v-card-title 
            h3 カードをクリックして武器を選択
          v-layout(row wrap fill-height align-space-around)
            v-flex(xs6 sm3 md2 lg2 v-for="weapon in weapons")
              v-card.white--text(hover color="green darken-3" @click="select(weapon)")
                v-card-title.pa-2
                  .body-1.text-truncate {{ weapon.name }}
                v-divider
                v-card-text.pa-2
                  .caption {{ weapon.category }}
                  .caption {{ weapon.special }}
                  .caption {{ weapon.damage }} [{{ weapon.type }}]ダメージ
                  .caption {{ weapon.rangeString }}
                  .caption 価格：{{ weapon.price }}
                  .caption 重量：{{ weapon.weight }}
                  v-layout
                    v-flex(xs6)
                    v-flex(xs6)

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
import { WEAPON, WEAPON_NAME } from '@/data/DATA';

type Validation = (v: string) => boolean | string;

@Component
export default class WeaponList extends Vue {
  @Prop() private value!: string;

  private weaponRules: Validation[] = [
    (v) => !!v || '武器を選択してください',
  ];
  private dialog: boolean = false;
  private weaponName: string[] = WEAPON_NAME;

  private get weapons(): Weapon[] {
    return [...WEAPON.values()];
  }

  private select(weapon: Weapon): void {
    this.$emit('input', weapon.name);
    this.dialog = false;
  }
}
</script>

<style lang="stylus">
</style>
