<template lang="pug">
v-app
  the-navigation-drawer(app fixed v-model="drawer")
  the-toolbar(@click="drawer=!drawer")
  v-content
    v-container
      the-progress-circler(v-if="wait")
      router-view(v-else)
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { MENUES } from '@/data/MENUES';

@Component
export default class App extends Vue {
  private drawer: boolean = false;

  private get wait(): boolean {
    return this.$store.state.wait;
  }
}
</script>

<style lang="stylus" scoped>
</style>
