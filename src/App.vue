<template lang="pug">
  transition(name="router" mode="out-in")
    router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
}
</script>

<style lang="stylus">
  .router-enter-active, .router-leave-active
    transition all 0.3s ease

  .router-enter
    transform translateX(100%)
    // opacity 0

  .router-leave-active
    // opacity 0
    transform translateX(-100%)
</style>