<template lang="pug">
  v-app
    v-toolbar(flat dark app dense)
      v-btn(icon @click="$router.go(-1)"): v-icon arrow_back_ios
      v-toolbar-title.text-xs-center ダンジョン
      v-spacer
      v-btn(icon to="/dungeonForm/new"): v-icon add
    v-content
      v-list
        template(v-for="(dungeon, key) in dungeons")
          v-list-tile
            v-list-tile-action(@click="$router.push(`/dungeonForm/${key}`)"): v-icon edit
            v-list-tile-content
              v-list-tile-title {{ dungeon.name }}
              v-list-tile-sub-title {{ dungeon.description }}
            v-list-tile-action(@click="`/dungeon/${key}/floors`"): v-icon keyboard_arrow_right
          v-divider
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Dungeon from '@/models/Dungeon';

  @Component
  export default class Dungeons extends Vue {
    private get dungeons(): { [key: string]: Dungeon } {
      return this.$store.state.dungeons;
    }
  }
</script>

<style lang="stylus" scoped>
</style>
