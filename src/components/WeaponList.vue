<template lang="pug">
  v-list-tile
    v-list-tile-content
      v-list-tile-title {{ weapon.name }}
      v-list-tile-sub-title {{ weapon.description }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Weapon } from '@/models/Weapon';

type Validation = (v: string) => boolean | string;

@Component
export default class WeaponList extends Vue {
  @Prop() private weapon!: Weapon;
}
</script>

<style lang="stylus">
</style>
