<template lang="pug">
  v-select(
    label="クラス"
    :items="klass"
    :value="value"
    @input="input"
    :rules="requird"
  )
</template>

<script lang="ts">
  import { Component } from 'vue-property-decorator';
  import SelectBase from '@/components/select/Base.vue';
  import { KLASS } from '@/data/DATA';

  type Validation = (v: string) => boolean | string;

  @Component
  export default class SelectKlass extends SelectBase {
    private klass: string[] = KLASS;
  }
</script>

<style scoped lang="stylus">
</style>
