<template lang="pug">
guild-form(
  :form="form"
  @save="save"
)
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Guild from '@/models/Guild';
import * as ACTION from '@/types/ActionTypes';

@Component
export default class GuildNew extends Vue {
  private form = Guild.form();

  private save() {
    this.$store.dispatch(ACTION.WAIT,
      () => this.$store.dispatch(ACTION.CREATE, new Guild(this.form)),
    );
    this.$router.push('/guilds');
  }
}
</script>

<style lang="stylus">
</style>
