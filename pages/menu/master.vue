<template lang="pug">
  v-layout.pa-4(justify-start align-center column)
    dd-menu-button(color="primary" to="/party/edit") ランダムアドベンチャー
    dd-menu-button(color="grey darken-4" to="/menu/monster") モンスターマニュアル
    .display-1.mt-4 冒険者が来た！
    .display-1 モンスターと罠の
    .display-1 準備をせよ！
    img(src="~assets/internet_god.png")
</template>

<script>
export default {
  created() {
    this.$nav.title = "ゲームマスター";
  },
};
</script>

<style lang="stylus" scoped>
img {
  width: 320px;
}
</style>
