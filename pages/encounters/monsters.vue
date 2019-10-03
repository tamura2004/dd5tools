<template lang="pug">
div
  v-tabs(v-model="tab" dark)
    v-tab {{ $encounter.zako | name }}
    v-tab {{ $encounter.boss | name }}
  v-tabs-items(v-model="tab")
    v-tab-item
      dd-monster-card(:monster="$encounter.zako")
    v-tab-item
      dd-monster-card(:monster="$encounter.boss")
</template>

<script>
export default {
  layout: "no-app-bar",
  data() {
    return { tab: null };
  },
};
</script>