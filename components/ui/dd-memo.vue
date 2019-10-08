<template lang="pug">
v-row#row(no-gutters)
  v-col(cols="3")
    v-card.text-center.grey.darken-4.white--text(height="100%" tile outlined)
      | {{ label }}
  v-col(cols="9")
    v-card.pl-2(height="100%" tile outlined)
      | {{ memo }}
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
