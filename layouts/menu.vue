<template lang="pug">
  v-app
    v-navigation-drawer(app v-model="$nav.drawer" temporary)
      v-list-item
        h1 menu
    v-app-bar(app dark dense color="grey darken-4")
      v-app-bar-nav-icon(@click="$nav.drawer = !$nav.drawer")
      v-toolbar-title.headline {{ $nav.title }}
    v-content
      v-container(fluid)
        nuxt
</template>

<style scoped lang="stylus">
#a
  border 2px solid red
</style>
