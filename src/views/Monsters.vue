<template lang="pug">
  v-card
    v-toolbar
      v-toolbar-title.text-xs-center monster
        v-list
          MonsterList(v-for="i in 6" :row="i")

</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import MonsterList from '@/components/MonsterList.vue';

  @Component({
    components: {
      MonsterList,
    },
  })
  export default class Monsters extends Vue {}
</script>

<style lang="stylus">
</style>
