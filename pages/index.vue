<template lang="pug">
  v-layout.pa-4(justify-start align-center column)
    .display-3.mb-4 トワイライト
    .display-3.mb-4 D&D5版
    .display-3.mb-4 キャンペーン
    .display-1.mb-4 あなたは・・・
    dd-menu-button(color="grey darken-4" to="/menu/master") マスター
    dd-menu-button(color="primary" to="/menu/guild") 冒険者
    dd-menu-button(color="primary" to="/sandbox") 砂場
</template>

<script>
export default {
  created() {
    this.$nav.title = "DD5TOOLS";
  }
};
</script>
