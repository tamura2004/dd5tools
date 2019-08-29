<template lang="pug">
  v-app
    dd-drawer
    v-app-bar(app dark dense clipped-left color="grey darken-4")
      template(#extension v-if="data.extension")
        dd-app-bar-extension
      dd-back-button
      v-toolbar-title {{ data.title }}
      v-spacer
      dd-search-button
      dd-new-button
      v-app-bar-nav-icon(@click.stop="drawer(!data.drawer)")
    v-content
      v-container(fluid)
        nuxt
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ddDrawer from "~/components/layouts/dd-drawer";
import ddSearchButton from "~/components/layouts/dd-search-button";
import ddBackButton from "~/components/layouts/dd-back-button";
import ddNewButton from "~/components/layouts/dd-new-button";
import ddAppBarExtension from "~/components/layouts/dd-app-bar-extension";

export default {
  components: {
    ddDrawer,
    ddSearchButton,
    ddBackButton,
    ddNewButton,
    ddAppBarExtension,
  },
  computed: mapGetters("nav", ["data"]),
  methods: mapActions("nav", ["drawer"]),
};
</script>
