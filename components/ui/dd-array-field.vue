<template lang="pug">
  v-row
    v-col(v-for="(v, i) in 6" :key="i")
      //- v-text-field(:label="labels[i]" :value="abilities[i]" @input="update(i, $event)")
      dd-tenkey(:label="labels[i]" :value="abilities[i]" @input="update(i, $event)")
</template>

<script>
export default {
  props: ["value"],
  computed: {
    abilities() {
      return this.value || [0, 0, 0, 0, 0, 0];
    },
    labels() {
      return ["str", "dex", "con", "int", "wis", "cha"];
    },
  },
  methods: {
    update(i, v) {
      const value = this.abilities;
      value[i] = v;
      this.$emit("input", value);
    },
  },
};
</script>
