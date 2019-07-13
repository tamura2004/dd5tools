<template lang="pug">
guild-form(
  :form="form"
  @save="save"
)
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Guild from '@/models/Guild';
import * as ACTION from '@/types/ActionTypes';
import _ from 'lodash';

@Component
export default class GuildEdit extends Vue {
  @Prop() private guildId!: string;
  private form: Guild | null = null;

  private get guild() {
    return this.$store.getters.guild(this.guildId);
  }

  private created() {
    if (this.guild !== undefined) {
      this.form = _.cloneDeep(this.guild);
    } else {
      // this.$router.replace('/guilds/new'); // 削除済キャラクターの編集なら新規画面へ
    }
  }

  private async save() {
    await this.$store.dispatch(ACTION.WAIT,
      () => this.$store.dispatch(ACTION.UPDATE, {
        collectionName: 'guilds',
        id: this.guildId,
        updates: {
          ...this.form,
        },
      }),
    );
    this.$router.push(`/guild/${this.guildId}/players`);
  }
}
</script>

<style lang="stylus">
</style>
