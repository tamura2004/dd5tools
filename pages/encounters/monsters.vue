<template lang="pug">
div
  v-row(v-if="$vuetify.breakpoint.smAndUp")
    v-col
      dd-monster-card(:monster="$encounter.boss" :title="true")
    v-col
      dd-monster-card(:monster="$encounter.zako" :title="true")

  v-tabs(v-if="$vuetify.breakpoint.xsOnly" v-model="tab" dark)
    v-tab {{ $encounter.boss | name }}
    v-tab {{ $encounter.zako | name }}
  v-tabs-items(v-if="$vuetify.breakpoint.xsOnly" v-model="tab")
    v-tab-item
      dd-monster-card(:monster="$encounter.boss")
    v-tab-item
      dd-monster-card(:monster="$encounter.zako")
  dd-menu-button(to="/encounters/random" color="primary") 次の遭遇へ

</template>

<script>
export default {
  layout: "no-app-bar",
  data() {
    return { tab: null };
  },
};
</script>