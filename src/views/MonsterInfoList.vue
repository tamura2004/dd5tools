<template lang="pug">
  v-container
    v-list
      template(v-for="(monster, id) in monsters" :key="monster.name")
        MonsterInfoTile(:id="id")
        v-divider

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';
import MonsterInfoTile from '@/components/MonsterInfoTile.vue';
import MONSTER_INFOS from '@/data/MONSTERS';
import MonsterInfo from '@/models/MonsterInfo';

@Component({
  components: {
    MonsterInfoTile,
  },
})
export default class MonsterInfoList extends Vue {
  private monsters = MONSTER_INFOS;
}
</script>

<style lang="stylus">
</style>
