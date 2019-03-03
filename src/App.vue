<template lang="pug">
  v-app
    NavigationDrawer
    ToolBar
    v-content
      transition(name="router" mode="out-in")
        router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavigationDrawer from '@/components/layout/NavigationDrawer.vue';
import ToolBar from '@/components/layout/ToolBar.vue';

@Component({
  components: {
    NavigationDrawer,
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