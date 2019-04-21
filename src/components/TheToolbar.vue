<template lang="pug">
  v-toolbar(app fixed flat dark dense)
    v-toolbar-items
      v-btn(flat icon @click="$router.go(-1)")
        v-icon arrow_back_ios
    v-toolbar-title.headline {{ titles.get($route.name) }}
    v-spacer
    v-toolbar-side-icon(v-on="$listeners")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { TITLES } from '@/data/TITLES';

@Component
export default class TheToolbar extends Vue {
  private titles: Map<string, string> = TITLES;
}
</script>

<style lang="stylus" scoped>
</style>
