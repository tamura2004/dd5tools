<template lang="pug">
v-dialog(v-model="dialog" width="320")
  .display-1(slot="activator") {{ value }}
  v-card
    v-card-title.pb-0 {{ title }}
    v-container(grid-list-md text-xs-center style="width: 320px")
      v-layout.ma-0(row wrap style="border: grey solid 1px")
        v-flex(xs3)
          h1 {{ value }}
        v-flex(xs1)
          h1 {{ operator }}
        v-flex(xs4)
          h1 {{ num }}
        v-flex(xs1)
          h1 =
        v-flex(xs3)
          h1 {{ target }}
      v-layout(row wrap)
        v-flex(xs9)
          v-layout(row wrap)
            v-flex(xs4 v-for="n in NUMS" :key="n")
              v-card
                v-card-text.headline(@click="append(n)") {{ n }}
            v-flex(xs8)
              v-card
                v-card-text.headline(@click="append(0)") 0
            v-flex(xs4)
              v-card
                v-card-text.headline(@click="append('.')") .
        v-flex(xs3)
          v-layout(row wrap)
            v-flex(xs12)
              v-card(dark color="primary")
                v-card-text.headline(@click="num=''") Ｃ
            v-flex(xs12)
              v-card(dark color="primary" @click="operator='-'")
                v-card-text.headline ー
            v-flex(xs12)
              v-card(dark color="primary" @click="operator='+'")
                v-card-text.headline ＋
            v-flex(xs12)
              v-card(dark color="primary" @click="done")
                v-card-text.headline ＝
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { UPDATE } from '@/types/ActionTypes';

@Component
export default class Tenkey extends Vue {
  @Prop() private collectionName!: string;
  @Prop() private id!: string;
  @Prop() private field!: string;
  @Prop() private title!: string;

  private dialog: boolean = false;

  private get value(): number {
    return this.$store.state[this.collectionName].get(this.id)[this.field];
  }

  private operator: string = '-';
  private num: string = '0';
  private NUMS = ['7', '8', '9', '4', '5', '6', '1', '2', '3'];

  private get target(): number {
    if (this.operator === '+') {
      return Number(this.value) + Number(this.num);
    } else if (this.operator === '-') {
      return Number(this.value) - Number(this.num);
    } else {
      return 0;
    }
  }
  private append(n: string): void {
    if (n === '.') {
      this.num = this.num + n;
    } else {
      this.num = Number(this.num + n).toString();
    }
  }
  private done(): void {
    this.$store.dispatch(UPDATE, {
      collectionName: this.collectionName,
      id: this.id,
      updates: { [this.field]: this.target },
    });
    this.operator = '-';
    this.num = '0';
    this.dialog = false;
  }
}
</script>
