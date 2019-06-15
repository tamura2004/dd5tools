<template lang="pug">
v-form(ref="form" v-model="valid")
  v-toolbar(flat dark dense) セッション情報
  v-card.pt-2(flat)
    base-text-field(
      label="セッション名"
      v-model="form.name"
    )
    base-dungeon-select(
      v-model="form.dungeonId"
    )
    base-npc-select(
      v-model="form.npcId"
    )
    base-text-field(
      label="目的"
      v-model="form.purpose"
      :required="false"
    )
    base-text-field(
      label="条件"
      v-model="form.limit"
      :required="false"
    )
    base-text-field(
      label="報酬"
      v-model.number="form.reward"
      :required="false"
    )
    v-btn(
      color="primary"
      @click="$emit('save')"
      :disabled="!valid"
    ) 保存
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
  @Prop() private form!: Session;
  private valid: boolean = false;
}
</script>
