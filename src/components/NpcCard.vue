<template lang="pug">
div
  v-toolbar(flat dark dense)
    v-toolbar-title.subheading {{ npc.name }}
  v-card
    v-responsive(:aspect-ratio="4/5")
      v-img(
        ref="img"
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
  public $refs!: { img: any };
  @Prop() private npc!: Npc;
  @Prop() private id!: string;

  private url: string = 'img/noimage.png';

  private async created() {
    const storage = firebase.storage();
    const ref = storage.ref(`images/${this.id}.png`);
    const url = await ref.getDownloadURL();
    this.url = url;
  }
}
</script>
<style lang="stylus">
#img
  border solid 1px black
</style>
