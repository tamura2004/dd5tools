<template lang="pug">
  v-layout.pa-4(justify-start align-center column)
    .display-1.my-4
      | 次の冒険の舞台は「{{ place | name }}」だ。
    .display-1.my-4
      | {{ intro | name }}
      | {{ villain | name }}を相手取り、
      | {{ purpose | name }}！
    dd-menu-button(@click="roll" color="success") 振り直す
    dd-menu-button(@click="roll" color="primary") 決定
</template>

<script>
import PLACE_DATA from "~/assets/data/places";

export default {
  data() {
    return {
      place: null,
      purpose: null,
    };
  },
  created() {
    this.$nav.title = "ランダムダンジョン";
    this.roll();
  },
  methods: {
    roll() {
      this.place = this.$sample("places");
      this.purpose = this.$sample("adventure/purpose");
      this.villain = this.$sample("adventure/villain");
      this.intro = this.$sample("adventure/intro");
    },
  },
};
</script>

<style lang="stylus" scoped>
#img {
  width: 320px;
}
</style>
