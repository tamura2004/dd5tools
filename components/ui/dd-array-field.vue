<template lang="pug">
  v-row
    v-col(v-for="i in 6")
      v-text-field(:label="label(i)" :value="value && value[i-1]")
</template>

<script>
export default {
  props: ["value"],
  methods: {
    label(i) {
      const labels = ["str", "dex", "con", "int", "wis", "cha"];
      return labels[i - 1];
    },
  },
};
</script>