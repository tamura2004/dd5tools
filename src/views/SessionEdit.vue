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
import _ from 'lodash';

@Component
export default class SessionEdit extends Vue {
  @Prop() private sessionId!: string;
  private form: Session | null = null;

  private get session() {
    return this.$store.getters.session(this.sessionId);
  }

  private created() {
    if (this.session !== undefined) {
      this.form = _.cloneDeep(this.session);
    } else {
      // this.$router.replace('/Sessions/new'); // 削除済キャラクターの編集なら新規画面へ
    }
  }

  private async save() {
    await this.$store.dispatch(ACTION.WAIT,
      () => this.$store.dispatch(ACTION.UPDATE, {
        collectionName: 'sessions',
        id: this.sessionId,
        updates: {
          ...this.form,
        },
      }),
    );
    this.$router.push(`/session/${this.sessionId}/players`);
  }
}
</script>

<style lang="stylus">
</style>
