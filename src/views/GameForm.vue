<template lang="pug">
  v-card
    v-toolbar
      v-toolbar-title セッションシート
      v-btn(absolute dark fab bottom right color="blue" @click="save")
        v-icon save
    v-card-title.pa-2
      v-form(v-model="valid" ref="form")
        v-layout(row wrap)
          v-flex.pa-2(xs8 sm4)
            v-text-field(
              label="セッション名"
              v-model="game.title"
              :rules="requireRules"
            )
          v-flex.pa-2(xs4 sm2)
            v-text-field(
              label="マスター名"
              v-model="game.gm"
              :rules="requireRules"
            )
        h3 参加するプレイヤーを選択してください
        template(v-for="player in players")
            v-checkbox(:label="player.summary" v-model="game.players" :value="player" :key="player.id")
</template>

<script lang="ts">
import { Game } from '@/models/Game';
import { Player } from '@/models/Player';
import { Component, Vue, Prop } from 'vue-property-decorator';
import API from '@/api';

type Validation = (v: string) => boolean | string;

@Component
export default class PlayerForm extends Vue {
  public game: Game = new Game({});
  public valid: boolean = false;
  public requireRules: Validation[] = [
    (v) => !!v || '必須項目です',
  ];
  @Prop() private id!: string;

  private get players(): Player[] {
      return this.$store.state.players;
  }
  private save(): void {
    if (this.valid) {
      if (typeof this.game._id !== 'undefined') {
        API.put('/games/' + this.game._id.$oid, this.game)
        .then((res) => this.$router.push('/games'))
        .catch((e) => alert(e));
      } else {
        API.post('/games', this.game)
        .then((res) => this.$router.push('/games'))
        .catch((e) => alert(e));
      }
    } else {
      (this.$refs.form as Vue & {validate: () => boolean}).validate();
      alert('エラー：未入力項目があります');
    }
  }

  private created(): void {
    this.$store.dispatch('getPlayers');
    if (this.id === 'new') {
      delete this.game._id;
    } else {
      API.get('/games/' + this.id)
        .then((res) => this.game = new Game(res.data))
        .catch((e) => alert(e));
    }
  }
}
</script>

<style scoped lang="stylus">
.text
  margin-top 4px
  padding-top 12px
  font-size 16px
  color rgba(0, 0, 0, 0.87)
</style>

