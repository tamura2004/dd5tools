<template lang="pug">
  v-select(
    label="属性"
    :items="alignments"
    :value="value"
    @input="input"
    :rules="required"
  )
</template>

<script lang="ts">
  import { Component } from 'vue-property-decorator';
  import SelectBase from '@/components/select/Base.vue';
  import { ALIGNMENT } from '@/data/DATA';

  type Validation = (v: string) => boolean | string;

  @Component
  export default class SelectAlignment extends SelectBase {
    private alignments: string[] = ALIGNMENT;
  }
</script>

<style scoped lang="stylus">
</style>
