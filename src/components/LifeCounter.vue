<template lang="pug">
  v-dialog(v-model="dialog" width="320")
    .display-1(slot="activator") {{ value }}
    Tenkey(
      :value="value"
      @input="done($event)"
      title="hpを変更して「＝」キーを押してください"
    )
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Tenkey from '@/components/Tenkey.vue';
import PATH from '@/types/PathTypes';

@Component({
  components: {
    Tenkey,
  },
})
export default class LifeCounter extends Vue {
  @Prop() private maxHp!: number;
  @Prop() private value!: number;

  private dialog: boolean = false;

  private setHp(hp: number): void {
    this.$emit('input', hp);
    this.dialog = false;
  }
  private back(): void {
    this.$router.push({
      name: PATH.HOME,
    });
  }
  private done(value: number): void {
    let hp = value < 0 ? 0 : value;
    hp = this.maxHp < hp ? this.maxHp : hp;
    this.dialog = false;
    this.$emit('input', hp);
  }
}
</script>