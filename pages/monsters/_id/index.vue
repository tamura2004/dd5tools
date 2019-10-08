<template lang="pug">
  dd-monster-card(:monster="$monster.data")
</template>

<script>
export default {
  fetch({ params, app }) {
    const id = params.id;
    app.$monster.data = app.$read("monsters", id);
    app.$nav.data = {};
    app.$nav.title = app.$monster.name;
  },
};
</script>
