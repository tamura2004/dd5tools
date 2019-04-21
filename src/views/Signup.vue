<template lang="pug">
base-menu-card(title="ＩＤ登録")
  template(v-slot:form)
    v-form(v-model="valid")
      base-email-text-field(v-model="email")
      base-password-text-field(v-model="password")
  template(v-slot:action)
    v-spacer
    v-btn(color="primary" @click="signup" :disabled="!valid") サインアップ
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import * as ACTION from '@/types/ActionTypes';

@Component
export default class Signup extends Vue {
  private email: string = '';
  private password: string = '';
  private valid: boolean = false;

  private signup() {
    this.$store.dispatch(ACTION.WAIT,
      async () => this.$store.dispatch(ACTION.SIGNUP, this),
    );
    this.$router.push('/signin');
  }
}
</script>

<style lang="stylus">
</style>
