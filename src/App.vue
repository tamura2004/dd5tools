<template lang="pug">
  v-app
    TheNavigationDrawer
    TheToolBar
    v-content(app)
      v-container.pa-0
        transition(name="router" mode="out-in")
          router-view
    TheBottomNav
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TheNavigationDrawer from '@/components/TheNavigationDrawer.vue';
import TheBottomNav from '@/components/TheBottomNav.vue';
import TheToolBar from '@/components/TheToolBar.vue';

@Component({
  components: {
    TheNavigationDrawer,
    TheBottomNav,
    TheToolBar,
  },
})
export default class App extends Vue {
}

</script>

<style lang="stylus">
  .router-enter-active, .router-leave-active
    will-change opacity
    transition opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms
    // transition all 0.3s ease

  .router-enter, .router-.router-leave-to
    opacity 0
    // transform translateX(100%)
</style>