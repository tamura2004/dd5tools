<template lang="pug">
  v-layout.pa-4(justify-start align-center column)
    dd-menu-button(color="primary" to="/monsters") 人型
    dd-menu-button(color="primary" to="/monsters") 野獣
    dd-menu-button(color="primary" to="/monsters") エレメンタル
    dd-menu-button(color="primary" to="/monsters") 竜
    dd-menu-button(color="primary" to="/monsters") フェイ
    .headline 種類別モンスター
</template>

<script>
export default {
  fetch({ app }) {
    app.$nav.title = "種類別モンスター";
  },
};
</script>

<style lang="stylus" scoped>
#img {
  width: 320px;
}
</style>
