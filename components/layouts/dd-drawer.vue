<template lang="pug">
  v-navigation-drawer(app clipped :value='drawer')
    v-list(dense)
      v-list-item(v-for='menu in menues', :key='menu.name', :to='menu.to')
        v-list-item-action
          v-icon {{ menu.icon }}
        v-list-item-content
          v-list-item-title {{ menu.name }}
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    menues: [
      { icon: "mdi-home", to: "/", name: "トップメニュー" },
      { icon: "mdi-bacteria", to: "/monsters", name: "モンスターマニュアル" },
    ],
  }),
  computed: mapGetters("nav/drawer", ["drawer"]),
};
</script>
