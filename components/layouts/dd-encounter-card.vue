<template lang="pug">
  v-card.mb-6(width="100%" v-if="encounter")
    v-card-title.display-1
      | {{ encounter.place | name }}
    v-card-text
      .title {{ encounter.event | name }}
      .title {{ encounter.boss | name }}
      .title {{ encounter.zako | name }} * {{ encounter.num }}
    v-card-actions
      dd-menu-button(@click="save" color="primary") 選ぶ
</template>

<script>
import PLACE_DATA from "~/assets/data/places";

export default {
  data() {
    return {
      encounter: null,
    };
  },
  methods: {
    created() {
      this.roll();
    },
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
