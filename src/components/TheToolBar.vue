<template lang="pug">
  v-toolbar(
    app
    dark
    dense
    flat
    :color="color"
    :clipped-left="$vuetify.breakpoint.mdAndUp"
    fixed
    v-if="toolbar"
  )
    v-toolbar-title
      v-toolbar-side-icon(@click="$store.commit('layout/drawer', !drawer)")
      span {{ route }}
    v-spacer
    v-btn(icon :to="path")
      v-icon {{ icon }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { mapState } from 'vuex';
import LayoutState from '@/store/LayoutState';

@Component({
  computed: {
    ...mapState('layout', ['color', 'title', 'toolbar', 'drawer', 'icon', 'path']),
  },
})
export default class TheToolBar extends Vue {
  private get route(): string {
    return this.$route.fullPath;
  }
}

</script>

<style lang="stylus">
</style>
