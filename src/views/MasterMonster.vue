<template lang="pug">
  router-view
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class MasterMonster extends Vue {
    private get monsters() {
        return this.$store.state.monsters;
    }
    private created(): void {
      this.$store.commit('layout/icon', 'add');
      this.$store.commit('layout/path', '/monsterForm/new');
    }
  }
</script>

<style lang="stylus" scoped>
</style>
