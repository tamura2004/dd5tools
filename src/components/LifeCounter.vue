<template lang="pug">
  v-layout.center(align-center justify-center)
    v-flex(xs2): v-btn(fab small dark color="grey" @click="decHp10"): v-icon exposure_neg_1
    v-flex(xs2): v-btn(fab small dark color="grey" @click="decHp"): v-icon exposure_neg_1
    v-flex(xs4): h2 {{ hp }}
    v-flex(xs2): v-btn(fab small dark color="grey" @click="incHp"): v-icon exposure_plus_1
    v-flex(xs2): v-btn(fab small dark color="grey" @click="incHp10"): v-icon exposure_plus_1
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import UserInfo from '@/components/UserInfo.vue';

@Component
export default class LifeCounter extends Vue {
  @Prop() private maxHp!: number;
  @Prop() private hp!: number;

  private incHp(): void {
    if (this.hp < (this.maxHp || 0)) {
      this.hp++;
    } else {
      alert('既に最大hpです');
    }
  }
  private incHp10(): void {
    if (this.hp < (this.maxHp || 0)) {
      this.hp += 10;
    } else {
      alert('既に最大hpです');
    }
  }
  private decHp(): void {
    if (this.hp > 0) {
      this.hp--;
    } else {
      alert('hpはゼロ以下になりません');
    }
  }
  private decHp10(): void {
    if (this.hp > 0) {
      this.hp -= 10;
    } else {
      alert('hpはゼロ以下になりません');
    }
  }
  private back(): void {
    this.$router.push('/');
  }
}
</script>