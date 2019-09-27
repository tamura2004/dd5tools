<template lang="pug">
div
  v-card(max-width="80")
    .overline.pa-1.black.white--text.text-center a
    .headline.text-center(@click.stop="$refs.a.dialog = true") {{ a }}
    dd-tenkey(label="hp" v-model="a" ref="a")
  v-card(max-width="80")
    .overline.pa-1.black.white--text.text-center b
    .headline.text-center(@click.stop="$refs.b.dialog = true") {{ b }}
    dd-tenkey(label="hp" v-model="b" ref="b")
</template>

<script>
export default {
  data() {
    return {
      a: 123,
      b: 123,
    };
  },
};
</script>