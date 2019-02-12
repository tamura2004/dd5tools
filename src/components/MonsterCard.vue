<template lang="pug">
  div
    v-list-tile(@click="go")
      v-list-tile-content
        v-list-tile-title
          v-layout
            v-flex(xs12) {{ monster.name }}
        v-list-tile-sub-title
          v-layout
            v-flex(xs3) AC: {{ monster.ac }}
            v-flex(xs3) hp: {{ monster.hp }}
            v-flex(xs3) exp:{{ monster.totalExp }}
      v-list-tile-action
        v-icon keyboard_arrow_right

    v-divider

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Monster } from '@/models/Monster';

@Component
export default class MonsterCard extends Vue {
  @Prop() private monster!: Monster;

  private go(): void {
    this.$router.push(`/monster/${this.monster.name}`);
  }
}
</script>

<style lang="stylus">
</style>
