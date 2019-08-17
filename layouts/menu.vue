<template lang="pug">
  v-app
    v-navigation-drawer(app v-model="drawer" temporary)
      v-list-item
        h1 menu
    v-app-bar(app dark dense color="grey darken-4")
      v-app-bar-nav-icon(@click="drawer = !drawer")
      v-toolbar-title.headline {{ title }}
    v-content
      v-container(fluid)
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
