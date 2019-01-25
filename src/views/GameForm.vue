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
              v-model="form.title"
              :rules="requireRules"
            )
          v-flex.pa-2(xs4 sm2)
            v-text-field(
              label="マスター名"
              v-model="form.gm"
              :rules="requireRules"
            )
        h3 参加するプレイヤーを選択してください
        template(v-for="player in $store.state.players")
            v-checkbox(:label="player.summary" v-model="form.players" :value="player" :key="player.id")
</template>

<script lang="ts">
import { Game } from '@/models/Game';
import { Player } from '@/models/Player';
import { Component, Vue, Prop } from 'vue-property-decorator';
import API from '@/api';

type Validation = (v: string) => boolean | string;

@Component
export default class PlayerForm extends Vue {
  private form!: Game;
  private valid: boolean = false;
  private requireRules: Validation[] = [
    (v) => !!v || '必須項目です',
  ];
  @Prop() private id!: string;

  private created(): void {
    const game = this.$store.state.games.find((g: Game) => g.id === this.id);
    this.form = !!game ? Object.assign({}, game) : new Game({});
  }

  private save(): void {
    if (this.valid) {
      if (this.id === 'new') {
        this.$store.dispatch('createGame', this.form);
      } else {
        this.$store.dispatch('updateGame', this.form);
      }
      // if (typeof this.game._id !== 'undefined') {
      //   API.put('/games/' + this.game._id.$oid, this.game)
      //   .then((res) => this.$router.push('/games'))
      //   .catch((e) => alert(e));
      // } else {
      //   API.post('/games', this.game)
      //   .then((res) => this.$router.push('/games'))
      //   .catch((e) => alert(e));
      // }
    } else {
      (this.$refs.form as Vue & {validate: () => boolean}).validate();
      alert('エラー：未入力項目があります');
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

