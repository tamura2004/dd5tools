<template lang="pug">
  v-app
    v-toolbar(app dark flat)
      v-btn(icon to="/"): v-icon arrow_back_ios
      v-toolbar-title.text-xs-center モンスター
    v-content(app)
      v-list
        div(v-for="monster in monsters")
          MonsterCard(:monster="monster")
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { MONSTERS } from '@/data/MONSTERS';
  import { Monster } from '@/models/Monster';
  import MonsterCard from '@/components/MonsterCard.vue';

  @Component({
    components: {
      MonsterCard,
    },
  })
  export default class Monsters extends Vue {
    private monsters = MONSTERS.map((init) => new Monster(init, 1));
  }
</script>

<style lang="stylus" scoped>
</style>
