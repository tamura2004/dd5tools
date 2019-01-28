<template lang="pug">
  v-dialog(v-model="dialog")
    v-layout.center(align-center justify-center slot="activator")
      h1 {{ value }}
    v-card
      v-card-title 変更後のhpを選択してください
      v-container(grid-list-md fluid)
        v-layout(row wrap)
          v-btn(v-for="n in Number(maxHp) + 1" :key="n" fab small @click="setHp(maxHp - n + 1)") {{ maxHp - n + 1 }}
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import UserInfo from '@/components/UserInfo.vue';

@Component
export default class LifeCounter extends Vue {
  @Prop() private maxHp!: number;
  @Prop() private value!: number;

  private dialog: boolean = false;

  private setHp(hp: number): void {
    this.$emit('input', hp);
    this.dialog = false;
  }
  private back(): void {
    this.$router.push('/');
  }
}
</script>