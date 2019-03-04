<template lang="pug">
  router-view
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class MasterPlayer extends Vue {
    private get players() {
        return this.$store.state.players;
    }
    private created(): void {
      this.$store.commit('layout/icon', 'add');
      this.$store.commit('layout/path', '/playerForm/new');
    }
  }
</script>

<style lang="stylus" scoped>
</style>
