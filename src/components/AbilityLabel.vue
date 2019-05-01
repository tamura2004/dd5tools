<template lang="pug">
span
  span(v-for="(v, i) in ability" :key="i") {{ label(i) }}{{ v }}({{ modifyString(v) }})
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';


@Component
export default class AbilityLabel extends Vue {
  @Prop() private ability!: number[];

  private abilityLabel: string[] = [
    '【筋】',
    '【敏】',
    '【耐】',
    '【知】',
    '【判】',
    '【魅】',
  ];

  private label(i: number):string {
    return this.abilityLabel[i];
  }

  private modify(ability: number): number {
    return Math.floor((ability - 10) / 2);
  }

  private modifyString(ability: number): string {
    const modify = this.modify(ability);
    if (modify > 0) {
      return `+${modify}`;
    } else {
      return `${modify}`;
    }
  }
}
</script>
