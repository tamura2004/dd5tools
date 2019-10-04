<template lang="pug">
  div
    .title どっちに進む？
    dd-encounter-card(ref="up")
    .title または
    dd-encounter-card(ref="down")
    dd-menu-button(@click="roll" color="success") ロール
</template>

<script>
import PLACE_DATA from "~/assets/data/places";

export default {
  async fetch({ store, app, redirect }) {
    if (!app.$party.num) {
      redirect("/party/edit");
      return;
    }
    app.$nav.title = "遭遇";
  },
  methods: {
    roll() {
      this.$refs.up.roll();
      this.$refs.down.roll();
    },
  },
};
</script>
