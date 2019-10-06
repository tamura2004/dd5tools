<template lang="pug">
  v-card.mb-6(width="100%" @click="save")
    v-card-title.display-1
      | {{ environment.place | name }}
    v-card-text
      .title 移動手段：{{ environment.vehicle | name }}
      .title 要求技能：《{{ environment.skill | name }}》{{ environment.dc }}
      .title 報酬：{{ environment.prise | name }}
</template>

<script>
export default {
  data() {
    return {
      environment: Object.assign({}, this.$environment.data),
    };
  },
  created() {
    this.roll();
  },
  methods: {
    roll() {
      this.environment.place = this.$sample("places");
      this.environment.vehicle = this.$sample("vehicle");
      this.environment.skill = this.$sample("skills");
      this.environment.dc = Math.floor(
        Math.random() * 6 + 10 + this.$party.level / 2,
      );
      this.environment.prise = this.$sample("prise");
    },
    save() {
      this.$environment.data = this.environment;
      this.$write("values", "environment", this.$environment.data);
      this.$router.push("/encounters/random");
    },
  },
};
</script>
