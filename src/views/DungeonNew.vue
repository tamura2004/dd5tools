<template lang="pug">
dungeon-form(
  :form="form"
  @save="save"
)
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Dungeon from '@/models/Dungeon';
import * as ACTION from '@/types/ActionTypes';

@Component
export default class DungeonNew extends Vue {
  private form = Dungeon.form();

  private save() {
    this.$store.dispatch(ACTION.WAIT,
      () => this.$store.dispatch(ACTION.CREATE, new Dungeon(this.form)),
    );
    this.$router.push('/dungeons');
  }
}
</script>

<style lang="stylus">
</style>
