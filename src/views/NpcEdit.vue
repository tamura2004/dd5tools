<template lang="pug">
npc-form(
  :deletable="true"
  :init="npc"
  :id="npcId"
  @upload="uploadHandler"
  @delete="deleteHandler"
)
</template>

<script lang="ts">
import firebase from 'firebase/app';
import 'firebase/storage';
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { UPDATE, DELETE, DELETE_IMAGE, PUT_IMAGE, TO_BLOB } from '@/types/ActionTypes';
import Npc from '@/models/Npc';

@Component
export default class NpcEdit extends Vue {
  @Prop() public npcId!: string;

  private get npc(): Npc | undefined {
    return this.$store.getters.npc(this.npcId);
  }

  private async uploadHandler(payload: any) {
    this.$root.$data.processing = true;
    await this.$store.dispatch(UPDATE, {
      collectionName: 'npcs',
      id: this.npcId,
      updates: payload.form,
    });
    const blob = await this.$store.dispatch(TO_BLOB, {
      canvas: payload.canvas,
    });
    await this.$store.dispatch(PUT_IMAGE, {
      id: this.npcId,
      blob,
    });
    this.$root.$data.processing = false;
    this.$router.push('/npcs');
  }

  private async deleteHandler() {
    this.$root.$data.processing = true;
    await this.$store.dispatch(DELETE, {
      collectionName: 'npcs',
      id: this.npcId,
    });
    await this.$store.dispatch(DELETE_IMAGE, {
      id: this.npcId,
    });
    this.$router.replace('/npcs');
    this.$root.$data.processing = false;
  }
}
</script>

<style lang="stylus">
</style>
