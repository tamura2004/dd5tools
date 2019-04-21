<template lang="pug">
base-menu-card(title="ログイン")
  template(v-slot:form)
    v-form(v-model="valid")
      base-email-text-field(v-model="email")
      base-password-text-field(v-model="password")
  template(v-slot:action)
    v-spacer
    v-btn(color="primary" @click="signin" :disabled="!valid") サインイン
  template(v-slot:footer)
    router-link(to="/signup") ID登録はこちら
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import * as ACTION from '@/types/ActionTypes';

@Component
export default class Signin extends Vue {
  private email: string = '';
  private password: string = '';
  private valid: boolean = false;

  private signin() {
    this.$store.dispatch(ACTION.WAIT,
      async () => this.$store.dispatch(ACTION.SIGNIN, this),
    );
    this.$router.push('/');
  }
}
</script>

<style lang="stylus">
</style>
