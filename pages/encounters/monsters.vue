<template lang="pug">
div
  v-tabs(v-model="tab")
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
  data() {
    return {
      tab: null,
    };
  },
};
</script>