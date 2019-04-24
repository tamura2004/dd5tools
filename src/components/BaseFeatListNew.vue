<template lang="pug">
v-list-tile
  v-list-tile-avatar(@click="show=!show" v-if="!show")
    v-icon add
  template(v-else)
    v-list-tile-avatar(@click="show=!show")
      v-icon clear
    v-list-tile-content
      v-layout(row wrap)
        v-flex(xs12)
          v-text-field(
            solo
            flat
            hide-details
            block
            v-model="name"
            label="名前を入力"
          )
    v-list-tile-action
      v-btn(small dark color="primary" @click="save") 保存
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import * as ACTION from '@/types/ActionTypes';

@Component
export default class BaseFeatListNew extends Vue {
  @Prop() private playerId!: string;

  private show: boolean = false;
  private name: string = '';

  private save() {
    this.$store.dispatch(ACTION.CREATE_FEAT, this);
  }
}
</script>

<style lang="stylus" scoped>
</style>
