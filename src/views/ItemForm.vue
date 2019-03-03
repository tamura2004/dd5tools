<template lang="pug">
  v-app
    v-toolbar(app flat dark dense)
      v-btn(icon @click="$router.go(-1)"): v-icon arrow_back_ios
      v-toolbar-title アイテム登録
      v-spacer
      v-btn(icon @click="save"): v-icon done
    v-content(app)
      v-container.pa-2
        v-form(v-model="valid" ref="form")
          v-layout(row wrap)
            v-flex.pa-2(xs12)
              v-text-field(
                label="名前"
                v-model="form.name"
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
import Item from '@/models/Item';

type Validation = (v: string) => boolean | string;

@Component
export default class SpellForm extends Vue {
  @Prop() private id!: string;

  private valid: boolean = false;
  private required: Validation[] = [
    (v) => !!v || '必須項目です',
  ];
  private form: Item = new Item({});

  private save(): void {
    if (this.valid) {
      if (this.id !== 'new') {
        db.collection('items').doc(this.id).set({...this.form})
          .then((doc) => this.$router.push('/items'))
          .catch((error) => alert(error));
      } else {
        db.collection('items').add({...this.form})
          .then((doc) => this.$router.push('/items'))
          .catch((error) => alert(error));
      }
    } else {
      (this.$refs.form as Vue & {validate: () => boolean}).validate();
      alert('エラー：未入力項目があります');
    }
  }

  private created(): void {
    if (this.id !== 'new') {
      const form = this.$store.state.items[this.id];
      if (form !== undefined) {
        Object.assign(this.form, form);
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

