<template lang="pug">
  v-app
    v-toolbar(app)
      v-btn(flat icon @click="home")
        v-icon home
      v-toolbar-title.headline
        span D&D5eツール
      v-spacer
    v-content
      v-container(fluid fill-height)
        v-layout(align-start justify-center)
          v-flex(sm12 lg8)
            transition(name="router" mode="out-in")
              router-view
    v-footer
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