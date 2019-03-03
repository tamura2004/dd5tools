<template lang="pug">
  v-app
    v-toolbar(flat dark app dense)
      v-btn(icon @click="$router.go(-1)"): v-icon arrow_back_ios
      v-toolbar-title.text-xs-center ショップ・場所
      v-spacer
      v-btn(icon to="/placeForm/new"): v-icon add
    v-content
      v-list
        template(v-for="(place, key) in places")
          v-list-tile
            v-list-tile-content
              v-list-tile-title {{ place.name }}
              v-list-tile-sub-title {{ place.description }}
            v-list-tile-action(@click="$router.push(`/placeForm/${key}`)"): v-icon edit
          v-divider
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Place from '@/models/Place';

  @Component
  export default class Places extends Vue {
    private get places(): { [key: string]: Place } {
      return this.$store.state.places;
    }
  }
</script>

<style lang="stylus" scoped>
</style>
