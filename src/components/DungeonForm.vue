<template lang="pug">
v-form(v-model="valid" v-if="form")
  v-toolbar(flat dark dense) ダンジョンデータ
  v-card.pt-2(flat)
    base-text-field(
      label="名称"
      v-model="form.name"
    )
    base-text-field(
      label="説明"
      v-model="form.description"
    )
    v-card-actions
      v-spacer
      v-btn(
        color="primary"
        @click="$emit('save')"
      ) 登録

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Dungeon from '@/models/Dungeon';

@Component
export default class DungeonForm extends Vue {
  @Prop() private form!: Dungeon;
  private valid: boolean = false;
}
</script>

<style lang="stylus">
</style>
