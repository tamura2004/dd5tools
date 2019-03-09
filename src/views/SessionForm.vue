<template lang="pug">
  .headline SessionForm
    v-form(ref="form" v-model="valid")
      v-text-field(
        v-model="form.name"
        label="セッション名"
        :rules="required"
      )
      v-text-field(
        v-model="form.dungeon"
        label="場所"
        :rules="required"
      )
      v-text-field(
        v-model="form.requester"
        label="依頼者"
        :rules="required"
      )
      v-text-field(
        v-model="form.purpose"
        label="目的"
        :rules="required"
      )
      v-text-field(
        v-model="form.reward"
        label="報酬"
        :rules="required"
      )
      v-btn(@click="submit" color="primary" :disabled="!valid") 保存
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
type Validator = (v: string) => boolean | string;

@Component
export default class SessionForm extends Vue {
  @Prop() private sessionId!: string | undefined;

  private valid: boolean = false;
  private required: Validator[] = [
    (v: string) => !!v || '必須項目です',
  ];
  private form = {
    name: '',
    dungeon: '',
    requester: '',
    purpose: '',
    reward: '',
  };

  private submit() {
    alert('');
  }
}
</script>
