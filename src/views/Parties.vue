<template lang="pug">
  v-card
    v-toolbar
      v-toolbar-title.text-xs-center パーティ構成
    v-card-title
      v-layout(row v-for="(levelNum, i) in party.levelNums" :key="i")
        v-flex(xs5): v-select(:items="levels" label="レベル" v-model="levelNum[0]")
        v-flex(xs6 offset-xs1): v-select(:items="nums" label="人数" v-model="levelNum[1]")
    v-divider(light)
    v-card-actions
      v-spacer
      v-btn(color="primary" @click="setParty") 設定
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Party from '@/models/Party';

  @Component
  export default class Parties extends Vue {
    public levels: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    public nums: number[] = [1, 2, 3, 4, 5, 6];
    public party: Party = new Party([[0, 0], [0, 0], [0, 0], [0, 0]]);

    private setParty(): void {
      this.$store.commit('setParty', this.party);
      this.$router.push('/monsters');
    }
  }
</script>

<style lang="stylus">
</style>
