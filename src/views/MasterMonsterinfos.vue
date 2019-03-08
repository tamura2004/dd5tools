<template lang="pug">
  v-list(two-line)
    template(
        v-for="(monsterinfo, key) in monsterinfos"
    )
      v-list-tile
        Avatar(:monsterinfoId="key")
        PlayerTileContent(
          :id="key"
          :key="key"
          @click="$router.push(`monsterinfo/${key}/sheet`)"
        )
        v-list-tile-action
          v-icon arrow_forward_ios
      v-divider
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Avatar from '@/components/Avatar.vue';
  import PlayerTileContent from '@/components/PlayerTileContent.vue';
  import LifeCounter from '@/components/LifeCounter.vue';
  import { db } from '@/plugins/firebase';

  @Component({
    components: {
      Avatar,
      PlayerTileContent,
      LifeCounter,
    },
  })
  export default class Players extends Vue {
    private get monsterinfos() {
        return this.$store.state.monsterinfos;
    }
    private created(): void {
    this.$store.commit('layout/icon', 'add');
    this.$store.commit('layout/path', 'monsterinfo/new/form');
  }
  }
</script>

<style lang="stylus" scoped>
</style>
