<template lang="pug">
  v-tabs(align-with-title background-color="transparent")
    v-tab(@click="query(null)") all
    v-tab(v-for="i in 10" :key="i" @click="query(''+i)") CR{{i}}
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: mapActions("nav/search", ["query"]),
};
</script>
