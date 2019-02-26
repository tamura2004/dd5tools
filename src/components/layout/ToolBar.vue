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
      span {{ title }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { createNamespacedHelpers } from 'vuex';
import LayoutState from '@/models/LayoutState';

const {mapState} = createNamespacedHelpers('layout');

@Component({
  computed: {
    ...mapState({
      color: (state: LayoutState) => state.color,
      title: (state: LayoutState) => state.title,
      toolbar: (state: LayoutState) => state.toolbar,
      drawer: (state: LayoutState) => state.drawer,
    }),
  },
})
export default class ToolBar extends Vue {
}

</script>

<style lang="stylus">
</style>
