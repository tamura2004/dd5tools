<template lang="pug">
  v-layout.pa-4(justify-start align-center column)
    base-menu-button(color="primary") ギルドカード提示
    base-menu-button(color="success") 新規登録
    .headline.mt-4 いらっしゃいませ
    .headline ギルドカードをご提示ください
    .headline または新規登録ですか
    img#img(src="~assets/kaisya_uketsuke_woman.png")
</template>

<script>
export default {
  layout: "menu",
  created() {
    this.$store.dispatch("nav/title", "冒険者ギルド");
  },
};
</script>

<style lang="stylus" scoped>
#img
  width 320px
</style>
