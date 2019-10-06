<template lang="pug">
  v-card.mb-6(width="100%" @click="save")
    v-card-title.display-1
      | {{ encounter.boss | name }}
    v-card-text
      .title {{ encounter.zako | name }} * {{ encounter.num }}
      .title {{ encounter.reason | name }}
      .title 難易度：{{ encounter.mode.kanji }} / {{ encounter.exp }} exp
      .title 報酬：{{ encounter.prise | name }}
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
