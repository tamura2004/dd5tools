<template lang="pug">
div
  dd-adventure-memo(:adventure="$adventure.data")
  dd-menu-button(@click="roll" color="success") 振り直す
  dd-menu-button(@click="save" color="primary") 決定
  dd-boss-button(:boss="$adventure.monster")
</template>

<script>
export default {
  async fetch({ app, store }) {
    app.$nav.title = "アドベンチャー";
    app.$adventure.data = await store.dispatch("values/findOne", "adventure");
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
#row {
  margin-top: 1px;
}
</style>