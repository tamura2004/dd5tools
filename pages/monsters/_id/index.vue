<template lang="pug">
v-card
  v-card-text
    .caption
      | {{ $monster.size }}の
      | {{ $monster.type }}
      | {{ $monster.alignment }}
    v-divider
    .caption
      | ac:{{ $monster.ac }}
      | hp:{{ $monster.hp }}
    v-divider
    .caption
      | mv:{{ $monster.mv }}
    v-divider
    v-row
      v-col.py-0(v-for="i in 6") {{ $monster.ability[i-1] }}
    v-divider
    .block.caption
      | {{ $monster.actions}}
    v-divider
    .block.caption
      | {{ $monster.attributes}}
    v-divider
    .block.caption
      | {{ $monster.specials}}

</template>

<script>
export default {
  asyncData({ params, app }) {
    const id = params.id;
    app.$monster.data = app.$read("monsters", id);
    app.$nav.data = {};
    app.$nav.title = app.$monster.name;
  },
};
</script>

<style scoped>
.block {
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
