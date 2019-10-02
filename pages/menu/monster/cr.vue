<template lang="pug">
  v-layout.pa-4(justify-start align-center column)
    dd-menu-button(
      v-for="v in $read('monster/cr', v => v.exp > 10)"
      color="primary"
      :to="`/monsters?exp=${v.exp}`"
      :key="v.cr"
    ) 脅威度{{ v.cr }}
</template>

<script>
export default {
  fetch({ app }){
    app.$nav.title = "脅威度別モンスター";
  },
};
</script>

<style lang="stylus" scoped>
#img {
  width: 320px;
}
</style>
