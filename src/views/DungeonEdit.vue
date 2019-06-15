<template lang="pug">
dungeon-form(
  :form="form"
  @save="save"
)
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Dungeon from '@/models/Dungeon';
import * as ACTION from '@/types/ActionTypes';
import _ from 'lodash';

@Component
export default class DungeonEdit extends Vue {
  @Prop() private dungeonId!: string;
  private form: Dungeon | null = null;

  private get dungeon() {
    return this.$store.getters.dungeon(this.dungeonId);
  }

  private created() {
    if (this.dungeon !== undefined) {
      this.form = _.cloneDeep(this.dungeon);
    } else {
      // this.$router.replace('/dungeons/new'); // 削除済キャラクターの編集なら新規画面へ
    }
  }

  private async save() {
    await this.$store.dispatch(ACTION.WAIT,
      () => this.$store.dispatch(ACTION.UPDATE, {
        collectionName: 'dungeons',
        id: this.dungeonId,
        updates: {
          ...this.form,
        },
      }),
    );
    this.$router.push(`/dungeon/${this.dungeonId}`);
  }
}
</script>

<style lang="stylus">
</style>
