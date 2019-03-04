<template lang="pug">
  router-view
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class MasterDungeon extends Vue {
    private get dungeons() {
        return this.$store.state.dungeons;
    }
    private created(): void {
      this.$store.commit('layout/icon', 'add');
      this.$store.commit('layout/path', '/dungeonForm/new');
    }
  }
</script>

<style lang="stylus" scoped>
</style>
