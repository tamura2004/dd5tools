<template lang="pug">
  v-btn(icon @click="extension(!data.extension)" v-if="search")
    v-icon mdi-magnify
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: mapGetters("nav", ["data", "search"]),
  methods: mapActions("nav", ["extension"]),
};
</script>
