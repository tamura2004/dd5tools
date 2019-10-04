<template lang="pug">
  v-btn(icon @click="$router.back()" v-if="$route.path !== '/'")
    v-icon mdi-arrow-left
</template>
