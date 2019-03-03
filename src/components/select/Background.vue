<template lang="pug">
  v-select(
    label="背景"
    :items="background"
    :value="value"
    @input="input"
    :rules="required"
  )
</template>

<script lang="ts">
  import { Component } from 'vue-property-decorator';
  import SelectBase from '@/components/select/Base.vue';
  import { BACKGROUND } from '@/data/DATA';

  type Validation = (v: string) => boolean | string;

  @Component
  export default class SelectBackground extends SelectBase {
    private background: string[] = BACKGROUND;
  }
</script>

<style scoped lang="stylus">
</style>
