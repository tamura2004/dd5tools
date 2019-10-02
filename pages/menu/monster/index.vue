<template lang="pug">
  v-layout.pa-4(justify-start align-center column)
    dd-menu-button(color="primary" to="/menu/monster/cr") 脅威度別
    dd-menu-button(color="primary" to="/menu/monster/type") 種類別
</template>

<script>
export default {
  fetch({ app }) {
    app.$nav.title = "モンスターマニュアル";
  },
};
</script>

<style lang="stylus" scoped>
#img {
  width: 320px;
}
</style>
