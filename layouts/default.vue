<template lang="pug">
  v-app
    dd-drawer
    v-app-bar(app dark dense clipped-left color="grey darken-4")
      v-app-bar-nav-icon(@click.stop="toggle")
      v-toolbar-title {{ title }}
    v-content
      v-container(fluid)
        nuxt
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ddDrawer from "~/components/layouts/dd-drawer";

export default {
  components: {
    ddDrawer,
  },
  data() {
    return {
      drawer: false,
    };
  },
  computed: mapGetters("nav", ["title"]),
  methods: mapActions("nav/drawer", ["toggle"]),
};
</script>
