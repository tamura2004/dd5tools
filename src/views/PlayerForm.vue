<template lang="pug">
  v-card
    v-toolbar(color="primary" dark)
      v-toolbar-title キャラクターシート
    v-card-title.pa-2
      v-form
        v-layout
          v-flex.pa-2(xs4)
            v-text-field(label="キャラクター名" v-model="player.characterName")
          v-flex.pa-2(xs4)
            v-text-field(label="プレイヤー名" v-model="player.name")
          v-flex.pa-2(xs4)
            v-select(label="クラス" :items="klass" v-model="player.klass")
        v-layout
          v-flex.pa-2(xs4)
            v-select(label="種族" :items="races" v-model="player.race")
          v-flex.pa-2(xs4)
            v-select(label="属性" :items="alignment" v-model="player.alignment")
          v-flex.pa-2(xs4)
            v-select(label="背景" :items="background" v-model="player.background")
        v-layout
          v-flex(xs2) 【筋】
          v-flex(xs2) 【敏】
          v-flex(xs2) 【耐】
          v-flex(xs2) 【知】
          v-flex(xs2) 【判】
          v-flex(xs2) 【魅】
        v-layout
          v-flex.ma-2(xs2 v-for="i in 6")
            v-select(:items="[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]"  v-model="player.baseAbility[i-1]")
        v-layout
          v-flex.ma-2(xs2 v-for="a in ability"): h3 {{ a }}

</template>

<script lang="ts">
import { Player } from '@/models/Player';
import { Component, Vue, Prop } from 'vue-property-decorator';
import { RACES, ALIGNMENT, BACKGROUND, KLASS } from '@/data/DATA';

@Component
export default class PlayerForm extends Vue {
  public player: Player = new Player({});
  public races: string[] = RACES;
  public alignment: string[] = ALIGNMENT;
  public background: string[] = BACKGROUND;
  public klass: string[] = KLASS;

  public get ability(): number[] {
    const ret = this.player.ability;
    if (typeof ret !== 'undefined') {
      return ret;
    } else {
      return [0, 0, 0, 0, 0, 0];
    }
  }
  private created(): void {
    this.player.rollAbility();
  }
}
</script>

<style lang="stylus">
</style>

