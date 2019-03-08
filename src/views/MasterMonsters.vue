<template lang="pug">
  v-list(two-line)
    template(
        v-for="(monster, key) in monsters"
    )
      MonsterInfoTile(
        :id="key"
        :key="key"
        @click="$router.push(`monster/${key}/sheet`)"
      )
      v-divider
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import LifeCounter from '@/components/LifeCounter.vue';
  import { db } from '@/plugins/firebase';
  import MONSTER_INFOS from '@/data/MONSTERS';
  import MonsterInfoTile from '@/components/MonsterInfoTile.vue';

  @Component({
    components: {
      MonsterInfoTile,
    },
  })
  export default class MasterMonsters extends Vue {
    private monsters = MONSTER_INFOS;
    private created(): void {
    this.$store.commit('layout/icon', 'add');
    this.$store.commit('layout/path', '/monsterForm/new');
  }
  }
</script>

<style lang="stylus" scoped>
</style>
