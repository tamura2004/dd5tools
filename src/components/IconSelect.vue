<template lang="pug">
  v-layout
    v-img(:src="require('@/assets/' + value)" @click="dialog=true")
    v-dialog(v-model="dialog")
      v-card
        v-card-title.pb-0 クリックしてアイコンを選択してください
          v-container(grid-list-md fluid)
            v-layout(row wrap)
              v-flex(v-for="avatar in avatars" xs2 sm1)
                v-card(hover @click="select(avatar)")
                  v-img(:src="require('@/assets/' + avatar)")
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { AVATAR } from '@/data/DATA';

@Component
export default class IconSelect extends Vue {
  @Prop() private value!: string;
  private dialog: boolean = false;
  private avatars = AVATAR;

  private select(avater: string): void {
    this.$emit('input', avater);
    this.dialog = false;
  }
}
</script>