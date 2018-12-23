<template lang="pug">
  v-card
    v-toolbar
      v-toolbar-title.text-xs-center ワンダリングモンスター
      v-spacer
      v-btn(icon @click="refresh")
        v-icon refresh
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
    private refresh(): void {
      this.$router.push('/')
      this.$router.push('/monsters')
    }
  }
</script>

<style lang="stylus">
</style>
