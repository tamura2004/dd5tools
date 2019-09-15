<template lang="pug">
  v-app
    dd-drawer
    v-app-bar(app dark dense clipped-left color="grey darken-4")
      template(#extension v-if="$nav.extension")
        dd-app-bar-extension
      dd-back-button
      v-toolbar-title {{ $nav.title }}
      v-spacer
      dd-search-button
      dd-new-button
      v-app-bar-nav-icon(@click.stop="$nav.drawer = !$nav.drawer")
    v-content
      v-container(fluid)
        nuxt
</template>
