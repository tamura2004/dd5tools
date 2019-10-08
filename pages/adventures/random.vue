<template lang="pug">
  v-layout.pa-4(justify-start align-center column)
    dd-headline.my-2
      | {{ $adventure.client | name }}の依頼により、
      | {{ $adventure.friend | name }}の助力を受けた冒険者一行。
    dd-headline.my-2
      | {{ $adventure.intro | name }}
      | {{ $adventure.monster | name }}、
      | {{ $adventure.villain | name }}を相手取り、
      | {{ $adventure.purpose | name }}！
    dd-headline.my-2
      | {{ $adventure.climax | name }}
    dd-menu-button(@click="roll" color="success") 振り直す
    dd-menu-button(@click="save" color="primary") 決定
    dd-boss-button(:boss="$adventure.monster")
</template>

<script>
export default {
  async asyncData({ store, app }) {
    app.$adventure.data = await store.dispatch("values/findOne", "adventure");
  },
  created() {
    this.$nav.title = "アドベンチャー";
  },
  middleware: ["party"],
  methods: {
    roll() {
      this.$adventure.client = this.$sample("adventure/client");
      this.$adventure.friend = this.$sample("adventure/friend");
      this.$adventure.purpose = this.$sample("adventure/purpose");
      this.$adventure.villain = this.$sample("adventure/villain");
      this.$adventure.intro = this.$sample("adventure/intro");
      this.$adventure.climax = this.$sample("adventure/climax");

      const exp = this.$lookup(
        "monster/cr",
        v => v.exp <= this.$party.HARD,
        "exp",
      );
      this.$adventure.monster = this.$sample("monsters", { exp });
    },
    save() {
      this.$write("values", "adventure", this.$adventure.data);
      this.$router.push("/environments/random");
    },
  },
};
</script>

<style lang="stylus" scoped>
#img {
  width: 320px;
}
</style>
