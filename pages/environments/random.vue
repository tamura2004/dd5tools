<template lang="pug">
  div
    .title どっちに行く？
    dd-environment-card(ref="up")
    .title または
    dd-environment-card(ref="down")
    dd-menu-button(@click="roll" color="success") 振り直し
</template>

<script>
export default {
  async fetch({ app }) {
    app.$nav.title = "行き先選択";
  },
  methods: {
    roll() {
      this.$refs.up.roll();
      this.$refs.down.roll();
    },
  },
};
</script>
