<template lang="pug">
  div
    transition(name="router" mode="out-in")
      router-view
    v-card(height="200px" flat)
      v-bottom-nav(absolute)
        v-btn(color="teal" flat to="/")
          span Home
          v-icon home
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Menu from '@/views/Menu.vue';

@Component({
  components: { Menu },
})
export default class App extends Vue {


  private home(): void {
    this.$router.push('/');
  }
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