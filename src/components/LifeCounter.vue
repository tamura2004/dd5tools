<template lang="pug">
  v-dialog(v-model="dialog" width="320")
    v-layout.center(align-center justify-center slot="activator")
      h1 {{ value }}
    Tenkey(
      :value="value"
      :max="maxHp"
      @input="done($event)"
      title="hpを変更して「＝」キーを押してください"
    )
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Tenkey from '@/components/Tenkey.vue';

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
    this.$router.push('/');
  }
  private done(value: number): void {
    let hp = value < 0 ? 0 : value;
    hp = this.maxHp < hp ? this.maxHp : hp;
    this.dialog = false;
    this.$emit('input', hp);
  }
}
</script>