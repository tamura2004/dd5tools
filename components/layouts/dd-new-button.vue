<template lang="pug">
  v-btn(icon :to="path" v-if="add")
    v-icon mdi-plus
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters("nav", ["path", "add"]),
};
</script>
