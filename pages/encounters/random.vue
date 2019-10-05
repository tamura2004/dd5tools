<template lang="pug">
  div
    .title どっちに進む？
    dd-encounter-card(ref="up")
    .title または
    dd-encounter-card(ref="down")
    dd-menu-button(@click="roll" color="success") ロール
</template>

<script>
export default {
  async fetch({ store, app, redirect }) {
    app.$nav.title = "遭遇";
  },
  middleware: ["party"],
  methods: {
    roll() {
      this.$refs.up.roll();
      this.$refs.down.roll();
    },
  },
};
</script>
