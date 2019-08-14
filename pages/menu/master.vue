<template lang="pug">
  v-layout.pa-4(justify-start align-center column)
    base-menu-button(color="primary") ランダムダンジョン
    base-menu-button(color="grey darken-4") 資料室
    .display-1.mt-4 冒険者が来た！
    .display-1 モンスターと罠の
    .display-1 準備はいいか？
    img#img(src="~assets/internet_god.png")
</template>

<script>
export default {
  layout: "menu",
  created() {
    this.$store.dispatch('nav/title', "ゲームマスター");
  }
};
</script>

<style lang="stylus" scoped>
#img
  width 320px
</style>