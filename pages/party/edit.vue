<template lang="pug">
v-layout.pa-4(justify-start align-center column)

  .display-2.my-4(@click.stop="$refs.level.dialog = true")
    | {{ $party.level | num }}レベル
    v-icon mdi-calculator
    dd-tenkey(label="レベル" v-model="$party.level" ref="level")

  .display-2.my-4(@click.stop="$refs.num.dialog = true")
    | {{ $party.num | num }}人
    v-icon mdi-calculator
    dd-tenkey(label="人数" v-model="$party.num" ref="num")

  dd-menu-button(@click="save" color="primary") 決定
</template>

<script>
export default {
  async asyncData({ app, store }) {
    app.$nav.title = "パーティレベル・人数";
    app.$party.data = await store.dispatch("values/findOne", "party");
  },
  methods: {
    save() {
      this.$party.normal = this.exp("NORMAL");
      this.$party.hard = this.exp("HARD");
      this.$write("values", "party", this.$party.data);
      this.$router.push("/adventures/random");
    },
    exp(mode) {
      const level = this.$party.level;
      const exp = this.$lookup("encounter/exp", { mode, level }, "exp");
      return this.$party.num * exp;
      // const total = this.$party.num * exp;
      // return this.$lookup("monster/cr", v => v.exp <= total, "exp");
    },
  },
};
</script>
