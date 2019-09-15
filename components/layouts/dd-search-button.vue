<template lang="pug">
  v-btn(icon @click="$nav.extension = !$nav.extension" v-if="$nav.search")
    v-icon mdi-magnify
</template>
