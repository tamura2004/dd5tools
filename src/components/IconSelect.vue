<template lang="pug">
  v-layout
    v-img(:src="`/img/${value}`" @click="dialog=true" v-if="value")
    v-btn(outline fab small @click="dialog=true" v-else).mr-4: v-icon people
    v-dialog(v-model="dialog")
      v-card
        v-card-title.pb-0 クリックしてアイコンを選択してください
          v-container(grid-list-md fluid)
            v-layout(row wrap)
              v-flex(v-for="avatar in avatars" xs2 sm1 :key="avatar")
                v-card(hover @click="select(avatar)")
                  v-img(:src="`/img/${avatar}`")
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import AVATAR_DATA from '@/data/AVATAR_DATA';

@Component
export default class IconSelect extends Vue {
  @Prop() private value!: string;
  private dialog: boolean = false;
  private avatars = AVATAR_DATA;

  private select(avater: string): void {
    this.$emit('input', avater);
    this.dialog = false;
  }
}
</script>