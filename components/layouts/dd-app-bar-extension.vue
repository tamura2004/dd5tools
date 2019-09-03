<template lang="pug">
  v-tabs(background-color="transparent" :value="data.query")
    v-tab(v-for="item in items" :key="item.text" @click="query(item.value)") {{ item.text }}
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: mapGetters("nav", ["items", "data"]),
  methods: mapActions("nav", ["query"]),
};
</script>
