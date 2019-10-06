<template lang="pug">
  v-card.mb-6(width="100%" @click="save")
    v-card-title.display-1
      | {{ encounter.boss | name }}
    v-card-text
      .title with {{ encounter.zako | name }} * {{ encounter.num }}
      .title {{ encounter.mode.kanji }}
</template>

<script>
export default {
  data() {
    return {
      encounter: Object.assign({}, this.$encounter.data),
    };
  },
  created() {
    this.roll();
  },
  methods: {
    roll() {
      this.encounter = this.$roll();
    },
    save() {
      this.$encounter.data = this.encounter;
      this.$write("values", "encounter", this.$encounter.data);
      this.$router.push("/encounters/monsters");
    },
  },
};
</script>
