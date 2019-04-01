<template lang="pug">
  v-card.elevation-12
    v-toolbar(dark dense)
      v-toolbar-title サインアップ
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
      v-btn(color="primary" @click="signup" :disabled="!valid") サインアップ
    v-card-text
      .caption メールアドレスとパスワードを登録して下さい

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import * as firebase from 'firebase/app';

type validateFunc = Array<(v: string) => boolean | string>;

@Component
export default class Signup extends Vue {
  private email: string = '';
  private password: string = '';
  private valid: boolean = false;

  private rules: validateFunc = [
    (v: string) => v !== '' || '必須項目です',
  ];

  private async signup() {
    try {
      this.$root.$data.processing = true;
      const { user } = await firebase.auth().createUserWithEmailAndPassword(this.email, this.password);
      this.$root.$data.processing = false;
      alert(`${user && user.email}でアカウントを作成しました`);
      this.$router.push('/signin');

    } catch (err) {
      alert(err);
    }
  }
}
</script>

<style lang="stylus">
</style>
