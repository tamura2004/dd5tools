<template lang="pug">
  v-app
    v-toolbar(flat dark app dense)
      v-btn(icon @click="$router.go(-1)"): v-icon arrow_back_ios
      v-toolbar-title {{ dungeon && dungeon.name }}
    router-view
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';
  import Dungeon from '@/models/Dungeon';

  @Component
  export default class Dungeons extends Vue {
    @Prop() private dungeonId!: string;

    private get dungeon(): Dungeon | undefined {
      return this.$store.state.dungeons[this.dungeonId];
    }
  }
</script>

<style lang="stylus" scoped>
</style>
