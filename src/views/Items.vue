<template lang="pug">
  v-app
    v-toolbar(flat dark app dense)
      v-btn(icon @click="$router.go(-1)"): v-icon arrow_back_ios
      v-toolbar-title.text-xs-center アイテム
      v-spacer
      v-btn(icon to="/itemForm/new"): v-icon add
    v-content
      v-list
        template(v-for="(item, key) in items")
          v-list-tile
            v-list-tile-content
              v-list-tile-title {{ item.name }}
              v-list-tile-sub-title {{ item.description }}
            v-list-tile-action(@click="$router.push(`/itemForm/${key}`)"): v-icon edit
          v-divider
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Item from '@/models/Item';

  @Component
  export default class Items extends Vue {
    private get items(): { [key: string]: Item } {
      return this.$store.state.items;
    }
  }
</script>

<style lang="stylus" scoped>
</style>
