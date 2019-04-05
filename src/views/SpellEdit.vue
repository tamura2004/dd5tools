<template lang="pug">
spell-form(
  :deletable="true"
  :init="spell"
  :id="spellId"
  @upload="uploadHandler"
  @delete="deleteHandler"
)
</template>

<script lang="ts">
import firebase from 'firebase/app';
import 'firebase/storage';
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { UPDATE, DELETE, DELETE_IMAGE, PUT_IMAGE, TO_BLOB } from '@/types/ActionTypes';
import Spell from '@/models/Spell';
import SpellForm from '@/components/SpellForm.vue';

@Component({
  components: {
    SpellForm,
  },
})
export default class SpellEdit extends Vue {
  @Prop() public spellId!: string;

  private get spell(): Spell | undefined {
    return this.$store.getters.spell(this.spellId);
  }

  private async uploadHandler(payload: any) {
    this.$root.$data.processing = true;
    await this.$store.dispatch(UPDATE, {
      collectionName: 'spells',
      id: this.spellId,
      updates: payload.form,
    });
    const blob = await this.$store.dispatch(TO_BLOB, {
      canvas: payload.canvas,
    });
    await this.$store.dispatch(PUT_IMAGE, {
      id: this.spellId,
      blob,
    });
    this.$root.$data.processing = false;
    this.$router.push('/spells');
  }

  private async deleteHandler() {
    this.$root.$data.processing = true;
    await this.$store.dispatch(DELETE, {
      collectionName: 'spells',
      id: this.spellId,
    });
    await this.$store.dispatch(DELETE_IMAGE, {
      id: this.spellId,
    });
    this.$router.replace('/spells');
    this.$root.$data.processing = false;
  }
}
</script>

<style lang="stylus">
</style>
