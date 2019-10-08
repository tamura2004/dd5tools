<template lang="pug">
  div
    dd-environment-card(:environment="$environment.data")
    dd-body どっちと戦う？
    dd-encounter-card(@click="save($event)" :encounter="up")
    dd-body または
    dd-encounter-card(@click="save($event)" :encounter="down")
    dd-menu-button(@click="roll" color="success") 振り直し
</template>

<script>
export default {
  async fetch({ app }) {
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
