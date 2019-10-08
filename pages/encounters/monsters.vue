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
    v-tab 冒険
  v-tabs-items(v-if="$vuetify.breakpoint.xsOnly" v-model="tab")
    v-tab-item
      dd-monster-card(:monster="$encounter.boss")
    v-tab-item
      dd-monster-card(:monster="$encounter.zako")
  dd-menu-button(to="/environments/random" color="primary") 次の遭遇へ
  dd-boss-button(:boss="$adventure.monster")
  dd-menu-button(to="/adventures" color="primary") アドベンチャーホームへ

</template>

<script>
export default {
  fetch({ app }) {
    app.$nav.title = "エンカウンター"
  },
  data() {
    return { tab: null };
  },
};
</script>