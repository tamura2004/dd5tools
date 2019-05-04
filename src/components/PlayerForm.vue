<template lang="pug">
v-form(v-model="valid")
  v-toolbar(flat dark dense) 冒険者登録用紙
  v-card.pt-2(flat)
    base-text-field(
      label="プレイヤー名"
      :value="value.name"
    )
    base-text-field(
      label="キャラクター名"
      :value="value.characterName"
    )
    base-select(
      label="属性"
      :items="alignments"
      v-model="$parent.form.alignment"
    )
    base-select(
      label="種族"
      :items="races"
      v-model="$parent.form.race"
    )
    base-select(
      label="クラス"
      :items="klasses"
      v-model="$parent.form.klass"
    )
    base-select(
      label="背景"
      :items="backgrounds"
      v-model="$parent.form.background"
    )
    v-layout(row wrap)
      template(v-for="i in 6")
        v-flex(xs2 :key="i")
          base-text-field(
            :label="abilityLabel[i-1]"
            v-model.number="$parent.form.baseAbility[i-1]"
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
import Player from '@/models/Player';
import * as DATA from '@/data/DATA';

@Component
export default class PlayerForm extends Vue {
  @Prop() private value!: Player;
  private valid = false;

  private klasses = DATA.KLASS;
  private races = DATA.RACES;
  private alignments = DATA.ALIGNMENT;
  private backgrounds = DATA.BACKGROUND;
  private abilityLabel = DATA.ABILITY_LABEL;
}
</script>

<style lang="stylus">
</style>
