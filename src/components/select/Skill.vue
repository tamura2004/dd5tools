<template lang="pug">
  v-select(
    label="スキル"
    :items="skillLabels"
    :value="value"
    @input="input"
    chips
    multiple
  )
</template>

<script lang="ts">
  import { Component } from 'vue-property-decorator';
  import SelectBase from '@/components/select/Base.vue';
  import { SKILL_LABELS } from '@/data/DATA';

  @Component
  export default class SelectSkill extends SelectBase {
    private skillLabels: string[] = SKILL_LABELS;
  }
</script>

<style scoped lang="stylus">
</style>
