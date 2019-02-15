<template lang="pug">
  v-app
    v-toolbar(app dark flat dense)
      v-btn(icon to="/"): v-icon arrow_back_ios
      v-toolbar-title.text-xs-center モンスター
    v-content(app)
      v-list
        template(v-for="monster in monsters")
          MonsterTile(:name="monster.name" num="1" :key="monster.name" @click="go(monster)")
            v-btn(slot="action" flat small fab @click="go(monster)")
              v-icon arrow_forward_ios
          v-divider
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { MONSTERS } from '@/data/MONSTERS';
  import { Monster } from '@/models/Monster';
  import MonsterTile from '@/components/MonsterTile.vue';

  @Component({
    components: {
      MonsterTile,
    },
  })
  export default class Monsters extends Vue {
    private monsters = MONSTERS.map((init) => new Monster(init, 1));

    private go(monster: Monster): void {
      this.$router.push(`/monster/${monster.name}`);
    }
  }
</script>

<style lang="stylus" scoped>
</style>
