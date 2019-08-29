<template lang="pug">
  v-app
    dd-drawer
    v-app-bar(app dark dense clipped-left color="grey darken-4")
      v-btn(icon @click="$router.back()")
        v-icon mdi-arrow-left
      v-toolbar-title {{ title }}
      v-spacer
      v-app-bar-nav-icon(@click.stop="toggle")
      template(#extension v-if="title==='モンスターマニュアル'")
        dd-search-by-cr
    v-content
      v-container(fluid)
        nuxt
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ddDrawer from "~/components/layouts/dd-drawer";
import ddSearchByCr from "~/components/pages/monster/dd-search-by-cr";

export default {
  components: {
    ddDrawer,
    ddSearchByCr,
  },
  data() {
    return {
      drawer: false,
    };
  },
  computed: {
    ...mapGetters("nav", ["title"]),
    ...mapGetters("nav/search", ["show"])
  },
  methods: mapActions("nav/drawer", ["toggle"]),
};
</script>
