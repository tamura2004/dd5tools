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
    transition all 0.3s ease

  .router-enter
    transform translateX(100%)

  .router-leave-active
    transform translateX(-100%)
</style>