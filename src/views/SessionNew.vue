<template lang="pug">
session-form(
  :form="form"
  @save="save"
)
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Session from '@/models/Session';
import * as ACTION from '@/types/ActionTypes';

@Component
export default class SessionNew extends Vue {
  private form = Session.form();

  private save() {
    this.$store.dispatch(ACTION.WAIT,
      () => this.$store.dispatch(ACTION.CREATE, new Session(this.form)),
    );
    this.$router.push('/sessions');
  }
}
</script>
