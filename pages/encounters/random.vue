<template lang="pug">
  v-layout.pa-4(justify-start align-center column)
    .display-1.my-4
      | 次の冒険の舞台は「{{ place | name }}」だ。
    .display-1.my-4
      | {{ client | name }}の依頼により、
      | {{ friend | name }}の助力を受けた冒険者一行。
    .display-1.my-4
      | {{ intro | name }}
      | {{ monster | name }}、
      | {{ villain | name }}を相手取り、
      | {{ purpose | name }}！
    .display-1.my-4
      | {{ climax | name }}
    dd-menu-button(@click="roll" color="success") 振り直す
    dd-menu-button(@click="roll" color="primary") 決定
</template>

<script>
import PLACE_DATA from "~/assets/data/places";

export default {
  data() {
    return {
      place: null,
      client: null,
      friend: null,
      purpose: null,
      villain: null,
      intro: null,
      climax: null,
      monster: null,
    };
  },
  created() {
    this.$nav.title = "アドベンチャー";
    this.roll();
  },
  methods: {
    roll() {
      this.place = this.$sample("places");
      this.client = this.$sample("adventure/client")
      this.friend = this.$sample("adventure/friend")
      this.purpose = this.$sample("adventure/purpose");
      this.villain = this.$sample("adventure/villain");
      this.monster = this.$sample("monsters", { type: this.villain.type });

      this.intro = this.$sample("adventure/intro");
      this.climax = this.$sample("adventure/climax");
    },
  },
};
</script>

<style lang="stylus" scoped>
#img {
  width: 320px;
}
</style>
