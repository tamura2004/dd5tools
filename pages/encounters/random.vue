<template lang="pug">
  div
    dd-environment-memo(:environment="$environment.data")
    .title.mt-4 どっちと戦う？
    dd-encounter-card(@click="save($event)" :encounter="up")
    .title または
    dd-encounter-card(@click="save($event)" :encounter="down")
    dd-menu-button(@click="roll" color="success") ロール
</template>

<script>
export default {
  async fetch({ store, app, redirect }) {
    app.$nav.title = "遭遇";
  },
  middleware: ["party"],
  data: () => ({
    up: null,
    down: null,
  }),
  created() {
    this.roll();
  },
  methods: {
    roll() {
      this.up = this.$roll();
      this.down = this.$roll();
    },
    save(encounter) {
      this.$encounter.data = encounter;
      this.$write("values", "encounter", encounter);
      // this.$write("encounters", encounter);
      this.$router.push("/encounters/monsters");
    },
  },
};
</script>
