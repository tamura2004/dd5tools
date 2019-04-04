<template lang="pug">
  .headline 特技
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class PlayerFeats extends Vue {
  @Prop() private playerId!: string;
}
</script>
