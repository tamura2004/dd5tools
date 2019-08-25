<template lang="pug">
div
  v-app-bar(app dark dense color="grey darken-4")
    v-app-bar-nav-icon
    v-toolbar-title.headline {{ title }}
  v-content
    v-container(fluid)
      v-layout(align-start justify-center)
        v-flex(xs12 sm12 md8 xl8)
          slot
</template>

<script>
export default {
  props: ["title"],
};
</script>