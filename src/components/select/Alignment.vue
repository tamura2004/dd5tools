<template lang="pug">
  v-select(
    label="属性"
    :items="alignments"
    :rules="alignmentRules"
    :value="value"
    @input="input"
  )
</template>

<script lang="ts">
  import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
  import { ALIGNMENT } from '@/data/DATA';

  type Validation = (v: string) => boolean | string;

  @Component
  export default class SelectAlignment extends Vue {
    @Prop() private value!: string;
    private alignments: string[] = ALIGNMENT;
    private alignmentRules: Validation[] = [
      (v) => !!v || '属性を選択してください',
    ];
  
    @Emit()
    private input(value: string) {
      const x = 0;
    }
  }
</script>

<style scoped lang="stylus">
</style>
