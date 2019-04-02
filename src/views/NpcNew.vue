<template lang="pug">
  npc-form(@upload="uploadHandler")
</template>

<script lang="ts">
import firebase from 'firebase/app';
import 'firebase/storage';
import { Component, Vue, Prop } from 'vue-property-decorator';
import { CREATE, TO_BLOB, PUT_IMAGE } from '@/types/ActionTypes';
import Npc from '@/models/Npc';
import NpcForm from '@/components/NpcForm.vue';

@Component({
  components: {
    NpcForm,
  },
})
export default class NpcNew extends Vue {
  private async uploadHandler(payload: any) {
    this.$root.$data.processing = true;
    const npcId = await this.$store.dispatch(CREATE, new Npc(payload.form));
    const blob = await this.$store.dispatch(TO_BLOB, {
      canvas: payload.canvas,
    });
    await this.$store.dispatch(PUT_IMAGE, {
      id: npcId,
      blob,
    });
    this.$root.$data.processing = false;
    this.$router.push('/npcs');
  }
}
</script>

<style lang="stylus">
</style>
