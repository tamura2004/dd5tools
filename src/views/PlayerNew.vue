<template lang="pug">
player-form(
  v-model="form"
  @save="save"
)
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Player from '@/models/Player';
import * as ACTION from '@/types/ActionTypes';

@Component
export default class PlayerNew extends Vue {
  private form = Player.form();

  private save() {
    this.$store.dispatch(ACTION.WAIT,
      () => this.$store.dispatch(ACTION.CREATE, new Player(this.form)),
    );
  }
}
</script>

<style lang="stylus">
</style>
