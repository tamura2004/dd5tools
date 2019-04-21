<template lang="pug">
  .headline セッション情報を入力してください
    v-form(ref="form" v-model="valid")
      base-text-field(v-model="form.name" label="セッション名")
      base-dungeon-select(v-model="form.dungeonId")
      base-npc-select(v-model="form.npcId")
      base-text-field(v-model="form.purpose" label="目的")
      base-text-field(v-model="form.limit" label="条件")
      base-text-field(v-model.number="form.reward" label="報酬")
      v-btn(@click="submit" color="primary" :disabled="!valid") 保存
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Session from '@/models/Session';
import { mapState } from 'vuex';
import { CREATE } from '@/types/ActionTypes';

import Item from '@/models/Item';
import PATH from '@/types/PathTypes';

@Component
export default class SessionForm extends Vue {
  @Prop() private sessionId!: string | undefined;

  private valid: boolean = false;
  private form = new Session({});

  private async submit() {
    const sessionId: string = await this.$store.dispatch(CREATE,
      new Session({...this.form}),
    );
    this.$router.push({
      name: PATH.SESSION_PLAYERS,
      params: { sessionId },
    });
  }
}
</script>
