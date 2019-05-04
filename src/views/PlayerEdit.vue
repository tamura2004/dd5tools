<template lang="pug">
player-form(
  v-model="form"
  @save="save"
)
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Player from '@/models/Player';
import * as ACTION from '@/types/ActionTypes';
import _ from 'lodash';

@Component
export default class PlayerEdit extends Vue {
  @Prop() private playerId!: string;
  private form: Player | null = null;

  private created() {
    if (this.player !== undefined) {
      this.form = _.cloneDeep(this.player);
    } else {
      // this.$router.replace('/players/new'); // 削除済キャラクターの編集なら新規画面へ
    }
  }

  private get player(): Player | undefined {
    return this.$store.getters.player(this.playerId);
  }

  private async save() {
    await this.$store.dispatch(ACTION.WAIT,
      () => this.$store.dispatch(ACTION.UPDATE, {
        collectionName: 'players',
        id: this.playerId,
        updates: {
          ...this.form,
        },
      }),
    );
    this.$router.push(`/player/${this.playerId}/weapons`);
  }
}
</script>

<style lang="stylus">
</style>
