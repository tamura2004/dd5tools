<template lang="pug">
  v-app
    v-toolbar
      v-btn(icon to="/"): v-icon clear
      v-toolbar-title.text-xs-center 呪文
      v-btn(absolute dark fab bottom small right color="red")
        v-icon add
    v-content
      v-container(fluid grid-list-lg)
        v-layout(row wrap)
          v-flex(xs6 sm4 v-for="n in 2" :key="n")
            v-card
              v-img(:src="`http://moneta.sofia3dd.net/img/spell_00${n}.png`")
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class Spells extends Vue {
  }
</script>

<style lang="stylus" scoped>
</style>
