<template lang="pug">
  v-card.elevation-12
    v-toolbar(dark dense)
      v-toolbar-title サインイン
    v-card-text
      v-form(v-model="valid")
        v-text-field(
          prepend-icon="person"
          name="email"
          label="email"
          type="text"
          v-model="email"
          :rules="rules"
        )
        v-text-field(
          id="password"
          prepend-icon="lock"
          name="password"
          label="password"
          type="password"
          v-model="password"
          :rules="rules"
        )
    v-card-actions
      v-spacer
      v-btn(color="success" to="/signup") サインアップ
      v-btn(color="primary" @click="signin" :disabled="!valid") サインイン
    v-card-text
      .caption ログインIDがまだ無い場合はサインアップで登録して下さい
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import firebase from 'firebase/app';
import 'firebase/auth';

type validateFunc = Array<(v: string) => boolean | string>;

@Component
export default class Signin extends Vue {
  private email: string = '';
  private password: string = '';
  private valid: boolean = false;

  private rules: validateFunc = [
    (v: string) => v !== '' || '必須項目です',
  ];

  private async signin() {
    try {
      this.$root.$data.processing = true;
      const { user } = await firebase.auth().signInWithEmailAndPassword(this.email, this.password);
      this.$root.$data.processing = false;
      alert(`${user && user.email}でログインしました`);
      this.$router.push('/');

    } catch (err) {
      alert(err);
    }
    // this.$router.push('/');
  }
}
</script>

<style lang="stylus">
</style>
