<template lang="pug">
div
  v-toolbar(flat dark dense)
    v-toolbar-title.subheading {{ npc.name }}
  v-card
    v-responsive(:aspect-ratio="4/5")
      v-img(
        :src="url"
        @error="error=true"
      )
      v-card-title.caption {{ npc.description }}
    v-divider
    v-card-actions
      v-spacer
      v-btn(
        small
        color="primary"
        :to="`/npc/${id}/edit`"
      ) 編集
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import firebase from 'firebase/app';
import 'firebase/storage';
import Npc from '@/models/Npc';

@Component
export default class NpcCard extends Vue {
  @Prop() private npc!: Npc;
  @Prop() private id!: string;

  private error: boolean = false;
  private get url(): string {
    if (!this.error) {
      return `https://storage.googleapis.com/dd5tools.appspot.com/images/${this.id}.png`;
    } else {
      return 'img/noimage.png';
    }
  }
}
</script>
<style lang="stylus">
#img
  border solid 1px black
</style>
