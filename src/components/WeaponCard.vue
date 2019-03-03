<template lang="pug">
  v-card.white--text(hover color="green darken-3" @click="select(weapon)")
    v-responsive(:aspect-ratio="1/1")
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
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Weapon } from '@/models/Weapon';

@Component
export default class WeaponList extends Vue {
  @Prop() private weapon!: Weapon;

  private select(weapon: Weapon): void {
    this.$emit('input', weapon.name);
  }
}
</script>

<style lang="stylus">
</style>
