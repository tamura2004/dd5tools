<template lang="pug">
  v-app
    nuxt
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      drawer: false,
    };
  },
  computed: mapGetters("nav", ["title"]),
};
</script>

<style scoped lang="stylus">
#a
  border 2px solid red
</style>
