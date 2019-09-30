<template lang="pug">
v-card
  v-card-text
    .body-1
      | {{ $monster.size }}の
      | {{ $monster.type }}
      | {{ $monster.alignment }}
    v-divider
    .body-1
      | ac:{{ $monster.ac }}
      | hp:{{ $monster.hp }}
      | mv:{{ $monster.mv }}
    v-divider
    v-row
      v-col(v-for="i in 6") {{ $monster.ability[i-1] }}
    v-divider
    .caption
      | {{ $monster.attributes}}
    v-divider
    .caption
      | {{ $monster.specials}}
    v-divider
    .caption
      | {{ $monster.actions}}

</template>

<script>
export default {
  asyncData({ params, app }) {
    const id = params.id;
    app.$monster.data = app.$read("monsters", id);
    app.$nav.data = {}
    app.$nav.title = app.$monster.name;
  },
};
</script>

<style scoped>
.caption {
 white-space: pre-wrap;
 word-wrap: break-word;
}
</style>
