<template lang="pug">
  v-layout.pa-4(justify-start align-center column)
    dd-menu-button(color="primary" to="/menu/monster/cr") 脅威度別
    dd-menu-button(color="primary" to="/menu/monster/type") 種類別
    .headline モンスターマニュアル
</template>

<script>
export default {
  created() {
    this.$store.dispatch("nav/set", { title: "モンスターマニュアル" });
  },
};
</script>

<style lang="stylus" scoped>
#img {
  width: 320px;
}
</style>
