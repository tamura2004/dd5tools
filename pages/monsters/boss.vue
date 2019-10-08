<template lang="pug">
  v-row
    v-col(cols="12" sm="7")
      dd-monster-card(:monster="$adventure.monster" title)
    v-col(cols="12" sm="5")
      dd-session-memo(title)
    v-col(cols="12")
      dd-menu-button(to="/encounters" color="primary") 勝利！
</template>

<script>
export default {
  fetch({ app }) {
    app.$nav.title = "ボス戦";
  },
};
</script>