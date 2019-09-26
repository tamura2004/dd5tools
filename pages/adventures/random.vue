<template lang="pug">
  v-layout.pa-4(justify-start align-center column)
    .headline.my-4
      | {{ $session.client | name }}の依頼により、
      | {{ $session.friend | name }}の助力を受けた冒険者一行。
    .headline.my-4
      | {{ $session.intro | name }}
      | {{ $session.monster | name }}、
      | {{ $session.villain | name }}を相手取り、
      | {{ $session.purpose | name }}！
    .headline.my-4
      | {{ $session.climax | name }}
    dd-menu-button(@click="roll" color="success") 振り直す
    dd-menu-button(@click="save" color="primary") 決定
</template>

<script>
import PLACE_DATA from "~/assets/data/places";

export default {
  async asyncData({ store, app }) {
    app.$session.data = await store.dispatch("values/findOne", "session");
    app.$nav.title = "アドベンチャー";
  },
  methods: {
    roll() {
      this.$session.client = this.$sample("adventure/client");
      this.$session.friend = this.$sample("adventure/friend");
      this.$session.purpose = this.$sample("adventure/purpose");
      this.$session.villain = this.$sample("adventure/villain");
      const type = this.$session.villain.type;
      this.$session.monster = this.$sample("monsters", { type });
      this.$session.intro = this.$sample("adventure/intro");
      this.$session.climax = this.$sample("adventure/climax");
    },
    save() {
      this.$write("values", "session", this.$session.data);
      this.$router.push("/encounters/random");
    },
  },
};
</script>

<style lang="stylus" scoped>
#img {
  width: 320px;
}
</style>
