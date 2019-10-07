<template lang="pug">
v-row#row(no-gutters)
  v-col(cols="3")
    v-card(height="100%").text-center.grey.darken-4.white--text(tile outlined)
      | {{ label }}
  v-col(cols="9")
    v-card(height="100%").pl-2(tile outlined)
      | {{ memo | name }}    
</template>

<script>
export default {
  props: ["label", "memo"],
};
</script>

<style scoped>
#row {
  margin-top: 1px;
}
</style>
