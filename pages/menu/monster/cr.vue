<template lang="pug">
  v-layout.pa-4(justify-start align-center column)
    dd-menu-button(v-for="i in 10" color="primary" :to="`/monsters?cr=${11-i}`" :key="i") 脅威度{{11-i}}
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
