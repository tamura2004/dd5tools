<template lang="pug">
  v-btn#btn.pa-2.my-4(
    nuxt
    dark
    rounded
    block
    :to="to"
    :color="color"
    v-on="$listeners"
  )
    slot
</template>

<script>
export default {
  props: ["color", "to"],
};
</script>

<style lang="stylus" scoped>
#btn
  height 60px
  font-size 32px
</style>
