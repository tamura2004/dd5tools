<template lang="pug">
  v-app
    v-toolbar(app flat dark dense)
      v-btn(icon @click="$router.go(-1)"): v-icon arrow_back_ios
      v-toolbar-title 呪文登録
      v-spacer
      v-btn(icon @click="save"): v-icon done
    v-content(app)
      v-container.pa-2
        v-form(v-model="valid" ref="form")
          v-layout(row wrap)
            v-flex.pa-2(xs12)
              v-text-field(
                label="呪文名称"
                v-model="form.name"
                :rules="required"
              )
            v-flex.pa-2(xs6)
              v-text-field(
                label="英語名"
                v-model="form.englishName"
              )
            v-flex.pa-2(xs6)
              v-text-field(
                label="日本語名"
                v-model="form.japaneseName"
              )
            v-flex.pa-2(xs6)
              v-text-field(
                label="クラス"
                v-model="form.klass"
              )
            v-flex.pa-2(xs6)
              v-text-field(
                label="レベル"
                v-model="form.level"
                :rules="required"
              )
            v-flex.pa-2(xs6)
              v-text-field(
                label="領域"
                v-model="form.type"
              )
            v-flex.pa-2(xs6)
              v-text-field(
                label="発動時間"
                v-model="form.castingTime"
                :rules="required"
              )
            v-flex.pa-2(xs6)
              v-text-field(
                label="射程"
                v-model="form.range"
                :rules="required"
              )
            v-flex.pa-2(xs6)
              v-select(
                  v-model="form.components"
                  :items="['音声','動作','物質']"
                  chips
                  multiple
                  label="構成要素"
                )
            v-flex.pa-2(xs6)
              v-text-field(
                label="持続時間"
                v-model="form.duration"
                :rules="required"
              )
            v-flex.pa-2(xs12)
              v-textarea(
                label="説明"
                v-model="form.description"
                :rules="required"
              )
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { db } from '@/plugins/firebase';
import Spell from '@/models/Spell';

type Validation = (v: string) => boolean | string;

@Component
export default class SpellForm extends Vue {
  @Prop() private id!: string;

  private valid: boolean = false;
  private required: Validation[] = [
    (v) => !!v || '必須項目です',
  ];
  private form: Spell = new Spell({});

  private save(): void {
    if (this.valid) {
      if (this.id !== 'new') {
        db.collection('spells').doc(this.id).set({...this.form})
          .then((doc) => this.$router.push('/spells'))
          .catch((error) => alert(error));
      } else {
        db.collection('spells').add({...this.form})
          .then((doc) => this.$router.push('/spells'))
          .catch((error) => alert(error));
      }
    } else {
      (this.$refs.form as Vue & {validate: () => boolean}).validate();
      alert('エラー：未入力項目があります');
    }
  }

  private created(): void {
    if (this.id !== 'new') {
      const spell = this.$store.state.spells[this.id];
      if (spell !== undefined) {
        Object.assign(this.form, spell);
      }
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

