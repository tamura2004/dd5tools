<template lang="pug">
  v-btn.menu.my-4(round dark block large :color="color" :to="to") {{label}}
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class MenuButton extends Vue {
  @Prop() private to!: string;
  @Prop() private label!: string;
  @Prop() private color!: string;
}
</script>

<style lang="stylus">
  .v-btn.menu
    height 60px
    font-size 32px
</style>
