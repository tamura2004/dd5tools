<template lang="pug">
  v-app
    v-toolbar(app dark flat dense)
      v-btn(icon to="/"): v-icon arrow_back_ios
      v-toolbar-title.text-xs-center モンスター
    v-content(app)
      v-list(three-line)
        template(v-for="(monsterInfo, id) in monsterInfos")
          MonsterInfoTile(:id="id" :key="id" @click="go(id)")
            v-btn(slot="action" flat small fab @click="go(id)")
              v-icon arrow_forward_ios
          v-divider
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import MONSTER_INFOS from '@/data/MONSTERS';
  import MonsterInfo from '@/models/MonsterInfo';
  import MonsterInfoTile from '@/components/MonsterInfoTile.vue';

  @Component({
    components: {
      MonsterInfoTile,
    },
  })
  export default class Monsters extends Vue {
    private monsterInfos: MonsterInfo[] = MONSTER_INFOS;

    private go(index: number): void {
      this.$router.push(`/monster/${index}`);
    }
  }
</script>

<style lang="stylus" scoped>
</style>
