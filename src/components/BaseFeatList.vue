<template lang="pug">
v-list-tile(v-if="!!feat")
  v-list-tile-content
    v-list-tile-title {{ feat.name }}
  v-list-tile-action
    base-number-tenkey(
      collectionName="feats"
      field="num"
      title="残数"
      :id="featId"
    )
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Feat from '@/models/Feat'

@Component
export default class BaseFeatList extends Vue {
  @Prop() private featId!: string;

  private get feat() {
    return this.$store.getters.feat(this.featId);
  }
}
</script>
