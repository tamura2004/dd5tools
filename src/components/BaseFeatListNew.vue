<template lang="pug">
v-list-tile
  v-list-tile-content
    base-text-field(
      v-model="name"
      label="特技・アイテム"
      prepend-icon="colorize"
    )
  v-list-tile-action
    v-btn(tile small @click="save") 保存
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import * as ACTION from '@/types/ActionTypes';

@Component
export default class BaseFeatListNew extends Vue {
  @Prop() private playerId!: string;

  private name: string = '';

  private save() {
    this.$store.dispatch(ACTION.CREATE_FEAT, this);
  }
}
</script>
