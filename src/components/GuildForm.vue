<template lang="pug">
v-form(v-model="valid" v-if="form")
  v-toolbar(flat dark dense) ギルドデータ
  v-card.pt-2(flat)
    base-text-field(
      label="名称"
      v-model="form.name"
    )
    base-text-field(
      label="説明"
      v-model="form.description"
    )
    base-text-field(
      label="経験値"
      v-model="form.exp"
      type="number"
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
import Guild from '@/models/Guild';

@Component
export default class GuildForm extends Vue {
  @Prop() private form!: Guild;
  private valid: boolean = false;
}
</script>

<style lang="stylus">
</style>
