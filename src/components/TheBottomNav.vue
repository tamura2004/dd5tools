<template lang="pug">
v-bottom-nav(
  app
  fixed
  :active="true"
  :value="true"
  color="white"
)
    v-btn(
    color="primary"
    flat
    )
      span 受付
      v-icon home
    v-btn(
    color="primary"
    flat
    )
      span キャラクターシート
      v-icon account_box
    v-btn(
    color="primary"
    flat
    )
      span 外へ出る
      v-icon exit_to_app
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
}

</script>

<style lang="stylus">
</style>