<template lang="pug">
v-dialog(v-model="dialog" width="320")
  template(#activator="{ on }")
    .headline(v-on="on") {{ value }}
  v-card
    v-card-title.pb-0 {{ title }}
    v-container.pt-0(grid-list-md text-xs-center style="width: 320px")
      v-layout.mx-0.my-2(row wrap style="border: grey solid 1px")
        v-flex(xs3)
          h1.text-center {{ value }}
        v-flex(xs1)
          h1.text-center {{ operator }}
        v-flex(xs4)
          h1.text-center {{ num }}
        v-flex(xs1)
          h1.text-center =
        v-flex(xs3)
          h1.text-center {{ target }}
      v-layout(row wrap)
        v-flex(xs9)
          v-layout(row wrap)
            v-flex(xs4 v-for="n in NUMS" :key="n")
              v-card
                v-card-text.text-center.headline(@click="append(n)") {{ n }}
            v-flex(xs8)
              v-card
                v-card-text.headline.text-center(@click="append(0)") 0
            v-flex(xs4)
              v-card
                v-card-text.headline.text-center(@click="append('.')") .
        v-flex(xs3)
          v-layout(row wrap)
            v-flex(xs12)
              v-card(dark color="primary")
                v-card-text.headline.text-center(@click="num=0") Ｃ
            v-flex(xs12)
              v-card(dark color="primary" @click="operator='-'")
                v-card-text.headline.text-center ー
            v-flex(xs12)
              v-card(dark color="primary" @click="operator='+'")
                v-card-text.headline.text-center ＋
            v-flex(xs12)
              v-card(dark color="primary" @click="done")
                v-card-text.headline.text-center ＝
</template>

<script>
export default {
  props: ["label", "value"],
  data() {
    return {
      dialog: false,
      operator: "-",
      num: 0,
      NUMS: ["7", "8", "9", "4", "5", "6", "1", "2", "3"],
    };
  },
  computed: {
    target() {
      if (this.operator === "+") {
        return Number(this.value) + Number(this.num);
      } else if (this.operator === "-") {
        return Number(this.value) - Number(this.num);
      } else {
        return 0;
      }
    },
  },
  methods: {
    append(n) {
      if (n === ".") {
        this.num = this.num + n;
      } else {
        this.num = Number(this.num + n).toString();
      }
    },
    done() {
      this.dialog = false
      this.$emit("input", this.target);
    },
  },
};
</script>
