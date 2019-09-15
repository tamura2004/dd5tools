<template lang="pug">
  v-btn(icon @click="$router.back()" v-if="$nav.title !== 'DD5TOOLS'")
    v-icon mdi-arrow-left
</template>
