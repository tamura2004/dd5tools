<template lang="pug">
  v-card
    v-toolbar
      v-toolbar-title.text-xs-center ワンダリングモンスター
      v-spacer
      v-btn(flat @click="reload")
        v-icon replay
    v-list(two-line)
      MonsterList(v-for="i in 6" :row="i" :key="i")

</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import MonsterList from '@/components/MonsterList.vue';

  @Component({
    components: {
      MonsterList,
    },
  })
  export default class Monsters extends Vue {
    private get party() {
      return this.$store.state.party;
    }
    private go(): void {
      this.$router.push('/parties');
    }
    private reload(): void {
      this.$store.commit('setRandomMonsters');
    }
  }
</script>

<style lang="stylus">
</style>
