<template lang="pug">
  router-view
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Player } from '@/models/Player';
import MenuButton from '@/components/MenuButton.vue';

@Component
export default class Master extends Vue {
  private created(): void {
    this.$store.commit('layout/toolbar', true);
    this.$store.commit('layout/color', 'grey darken-4');
    this.$store.commit('layout/title', 'マスターツール');
  }
}
</script>
