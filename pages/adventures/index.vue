<template lang="pug">
div
  v-card
    dd-memo(label="依頼人" :memo="$adventure.client")
    dd-memo(label="協力者" :memo="$adventure.friend")
    dd-memo(label="導入" :memo="$adventure.intro")
    dd-memo(label="目的" :memo="$adventure.purpose")
    dd-memo(label="悪漢" :memo="$adventure.villain")
    dd-memo(label="ボス" :memo="$adventure.monster")
    dd-memo(label="決戦" :memo="$adventure.climax")
  dd-menu-button(@click="roll" color="success") 振り直す
  dd-menu-button(@click="save" color="primary") 決定
  dd-menu-button(:to="`/monsters/${$adventure.monster.id}`" color="error") ボス戦へ

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