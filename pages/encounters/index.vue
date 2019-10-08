<template lang="pug">
  v-row
    v-col(:cols="12" md="4" v-for="encounter of $read('encounters')" :key="encounter.id")
      dd-encounter-card(:encounter="encounter" @click="save($event)")
</template>

<script>
export default {
  methods: {
    save(encounter) {
      this.$encounter.data = encounter;
      this.$write("values", "encounter", encounter);
      // this.$write("encounters", encounter);
      this.$router.push("/encounters/monsters");
    },
  },
};
</script>