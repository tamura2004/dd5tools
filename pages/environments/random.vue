<template lang="pug">
  div
    .title どっちに行く？
    dd-environment-card(:environment="up" @click="save($event)")
    .title または
    dd-environment-card(:environment="down" @click="save($event)")
    dd-menu-button(@click="roll" color="success") 振り直し
</template>

<script>
export default {
  async fetch({ app }) {
    app.$nav.title = "行き先選択";
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
      this.up = this.environment();
      this.down = this.environment();
    },
    environment() {
      return {
        place: this.$sample("places"),
        vehicle: this.$sample("vehicle"),
        skill: this.$sample("skills"),
        dc: this.$dice(1, 6, 5 + this.$party.level),
      };
    },
    save(environment) {
      this.$environment.data = environment;
      this.$write("values", "environment", this.$environment.data);
      this.$write("environments", this.$environment.data);
      this.$router.push("/encounters/random");
    },
  },
};
</script>
