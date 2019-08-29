<template lang="pug">
  v-tabs(background-color="transparent")
    v-tab(v-for="item in items" :key="item.id" @click="query(item.value)") {{ item.label }}
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: mapGetters("nav", ["items"]),
  methods: mapActions("nav", ["query"]),
};
</script>
