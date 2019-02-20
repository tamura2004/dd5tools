<template lang="pug">
</template>

<script lang="ts">
  import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
  import { KLASS } from '@/data/DATA';

  type Validation = (v: string) => boolean | string;

  @Component
  export default class SelectBase extends Vue {
    @Prop() private value!: string | string[];
    private required: Validation[] = [
      (v) => !!v || '必須項目です',
    ];
  
    @Emit()
    private input(value: string) {}
  }
</script>

<style scoped lang="stylus">
</style>
