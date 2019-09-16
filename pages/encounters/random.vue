<template lang="pug">
  v-layout.pa-4(justify-start align-center column)
    .display-1.my-4 次の冒険の舞台は
    .display-1.my-4 「{{ place | name }}」だ!
    dd-menu-button(@click="roll" color="success") 振り直す
    dd-menu-button(@click="roll" color="primary") 決定
</template>

<script>
import PLACE_DATA from "~/assets/data/places";

export default {
  data() {
    return {
      place: null,
    };
  },
  created() {
    this.$nav.title = "ランダムダンジョン";
    this.roll();
  },
  methods: {
    roll() {
      this.place = this.$sample("places");
    },
  },
};
</script>

<style lang="stylus" scoped>
#img {
  width: 320px;
}
</style>
