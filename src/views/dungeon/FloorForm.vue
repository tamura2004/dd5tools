<template lang="pug">
  v-content(app)
    ListHeader(title="階層" icon="done" @click="save")
    v-container.pa-2
      v-form(v-model="valid" ref="form")
        v-layout(row wrap)
          v-flex.px-2(xs12)
            v-text-field(
              label="フロア名"
              v-model="form.name"
              :rules="required"
            )
          v-flex.px-2(xs6)
            v-select(
              label="階層レベル"
              :items="[1,2,3,4,5,6,7,8,9,10,99]"
              v-model="form.level"
              :rules="required"
            )
          v-flex.px-2(xs6)
            v-text-field(
              label="ＤＭ"
              v-model="form.dm"
            )
          v-flex.px-2(xs12)
            v-textarea(
              label="説明"
              v-model="form.description"
            )
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';
  import { db } from '@/plugins/firebase';
  import Dungeon from '@/models/Dungeon';
  import Floor from '@/models/Floor';
  import ListHeader from '@/components/ListHeader.vue';

  type Validation = (v: string) => boolean | string;

  @Component({
    components: {
      ListHeader,
    },
  })
  export default class DungeonForm extends Vue {
    @Prop() private dungeonId!: string;
    @Prop() private id!: string;
  
    private valid: boolean = false;
    private required: Validation[] = [
      (v) => !!v || '必須項目です',
    ];

    private form: Floor = new Floor({ dungeonId: this.dungeonId });

    private save(): void {
      if (this.valid) {
        if (this.id !== 'new') {
          db.collection('floors').doc(this.id).set({...this.form})
            .then((doc) => this.$router.push(`/dungeon/${this.dungeonId}/floors`))
            .catch((error) => alert(error));
        } else {
          db.collection('floors').add({...this.form})
            .then((doc) => this.$router.push(`/dungeon/${this.dungeonId}/floors`))
            .catch((error) => alert(error));
        }
      } else {
        (this.$refs.form as Vue & {validate: () => boolean}).validate();
        alert('エラー：未入力項目があります');
      }
    }

    private created(): void {
      if (this.id !== 'new') {
        Object.assign(this.form, this.$store.state.floors[this.id]);
      }

      if (this.form.map === undefined || JSON.stringify(this.form.map) === '[]') {
        this.form.initializeMap();
      }
    }
  }
</script>

<style lang="stylus" scoped>
</style>
