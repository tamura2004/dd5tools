<template lang="pug">
  router-view
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class MasterItem extends Vue {
    private get items() {
        return this.$store.state.items;
    }
    private created(): void {
      this.$store.commit('layout/icon', 'add');
      this.$store.commit('layout/path', '/itemForm/new');
    }
  }
</script>

<style lang="stylus" scoped>
</style>
