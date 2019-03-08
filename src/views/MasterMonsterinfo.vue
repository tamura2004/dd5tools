<template lang="pug">
  router-view
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Player } from '@/models/Player';

@Component
export default class MasterMonsterinfo extends Vue {
  @Prop() private monsterinfoId!: string;

  private get monsterinfo(): Player | undefined {
    return this.$store.state.monsterinfos[this.monsterinfoId];
  }

  private created(): void {
    this.$store.commit('layout/icon', 'add');
    this.$store.commit('layout/path', '/monsterinfo/new/form');
    this.$store.commit('layout/title', this.monsterinfo && this.monsterinfo.characterName);
  }
}
</script>

<style lang="stylus" scoped>
</style>
