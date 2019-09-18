<template lang="pug">
  v-card(max-width="80")
    .overline.pa-1.black.white--text.text-center hp
    .headline.text-center(@click.stop="$nav.dialog = true") {{ hp }}
    dd-tenkey(label="hp" v-model="hp")
</template>

<script>
export default {
  data() {
    return {
      hp: 123,
    };
  },
};
</script>