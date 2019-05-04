<template lang="pug">
v-form(v-model="valid" v-if="form")
  v-toolbar(flat dark dense) 冒険者登録用紙
  v-card.pt-2(flat)
    base-text-field(
      label="プレイヤー名"
      v-model="form.name"
    )
    base-text-field(
      label="キャラクター名"
      v-model="form.characterName"
    )
    base-select(
      label="属性"
      :items="alignments"
      v-model="form.alignment"
    )
    base-select(
      label="種族"
      :items="races"
      v-model="form.race"
    )
    base-select(
      label="クラス"
      :items="klasses"
      v-model="form.klass"
    )
    base-select(
      label="背景"
      :items="backgrounds"
      v-model="form.background"
    )
    v-layout(row wrap)
      template(v-for="i in 6")
        v-flex(xs2 :key="i")
          base-text-field(
            :label="abilityLabel[i-1]"
            v-model.number="form.baseAbility[i-1]"
            type="number"
          )
    base-select(
      label="スキル"
      multiple
      :items="skills"
      v-model="form.skills"
    )
    base-select(
      label="セーヴ"
      multiple
      :items="abilities"
      v-model="form.saves"
    )
    base-select(
      label="言語"
      multiple
      :items="languages"
      v-model="form.languages"
    )
    base-textarea(
      label="メモ"
      v-model="form.memo"
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
  @Prop() private form!: Player;

  private valid = false;

  private klasses = DATA.KLASS;
  private races = DATA.RACES;
  private alignments = DATA.ALIGNMENT;
  private backgrounds = DATA.BACKGROUND;
  private abilityLabel = DATA.ABILITY_LABEL;
  private skills = DATA.SKILL_LABELS;
  private abilities = DATA.ABILITY_LABEL;
  private languages = DATA.LANGUAGES;
}
</script>

<style lang="stylus">
</style>
