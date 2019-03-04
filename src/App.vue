<template lang="pug">
  v-app
    TheNavigationDrawer
    ToolBar
    v-content(app)
      v-container.pa-0
        transition(name="router" mode="out-in")
          router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TheNavigationDrawer from '@/components/layout/TheNavigationDrawer.vue';
import ToolBar from '@/components/layout/ToolBar.vue';

@Component({
  components: {
    TheNavigationDrawer,
    ToolBar,
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