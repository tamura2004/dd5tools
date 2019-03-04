<template lang="pug">
  v-select(
    label="種族"
    :items="races"
    :value="value"
    @input="input"
    :rules="required"
  )
</template>

<script lang="ts">
  import { Component } from 'vue-property-decorator';
  import SelectBase from '@/components/select/Base.vue';
  import { RACES } from '@/data/DATA';

  type Validation = (v: string) => boolean | string;

  @Component
  export default class SelectRace extends SelectBase {
    private races: string[] = RACES;
  }
</script>

<style scoped lang="stylus">
</style>
