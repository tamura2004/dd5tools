<template lang="pug">
  v-btn(icon @click="$router.back()" v-if="title !== 'DD5TOOLS'")
    v-icon mdi-arrow-left
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters("nav", ["title"]),
};
</script>
