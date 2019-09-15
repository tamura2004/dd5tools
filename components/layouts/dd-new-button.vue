<template lang="pug">
  v-btn(icon :to="$nav.path" v-if="$nav.add")
    v-icon mdi-plus
</template>
