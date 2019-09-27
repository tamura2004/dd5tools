<template lang="pug">
  v-navigation-drawer(app clipped right v-model="$nav.drawer")
    v-list(dense)
      v-list-item(v-for="menu in menues", :key="menu.name", :to="menu.to")
        v-list-item-action
          v-icon {{ menu.icon }}
        v-list-item-content
          v-list-item-title {{ menu.name }}
</template>

<script>
export default {
  data: () => ({
    menues: [
      { icon: "mdi-campfire", to: "/", name: "トップメニュー" },
      { icon: "mdi-death-star-variant", to: "/adventures/random", name: "アドベンチャー" },
      { icon: "mdi-cat", to: "/encounters/random", name: "エンカウンター" },
      { icon: "mdi-bacteria", to: "/monsters", name: "モンスターマニュアル" },
      { icon: "mdi-sword-cross", to: "/weapons", name: "武器" },
      { icon: "mdi-shield-half-full", to: "/", name: "防具" },
      { icon: "mdi-castle", to: "/", name: "王城" },
      { icon: "mdi-church", to: "/", name: "教会" },
      { icon: "mdi-flask", to: "/", name: "薬屋" },
      { icon: "mdi-calculator", to: "/calc", name: "計算機" },
    ],
  }),
};
</script>
