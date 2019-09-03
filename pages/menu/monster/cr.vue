<template lang="pug">
  v-layout.pa-4(justify-start align-center column)
    div(v-for="i in 10")
        dd-menu-button(color="primary" to="/monsters") 脅威度{{i+1}}
    .headline 脅威度別モンスター
</template>

<script>
export default {
  created() {
    this.$store.dispatch("nav/set", { title: "脅威度別モンスター" });
  },
};
</script>

<style lang="stylus" scoped>
#img {
  width: 320px;
}
</style>
