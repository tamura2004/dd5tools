<template lang="pug">
  v-app
    v-navigation-drawer(app v-model="drawer" temporary)
      v-list-item
        h1 menu
    v-app-bar(app dark dense)
      v-app-bar-nav-icon(@click="drawer = !drawer")
      v-toolbar-title dd5
    v-content
      v-container(fluid fill-height)
        v-layout(align-center justify-center)
          nuxt
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
}
</script>
