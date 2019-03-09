<template lang="pug">
  .headline Session # {{ sessionId }}
    v-tabs
      v-tab(:to="{ name: 'session/players' }") ＰＣ
      v-tab(:to="{ name: 'session/encounters' }") 遭遇
      v-tab(:to="{ name: 'session/reward' }") 報酬
    router-view
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Session extends Vue {
  @Prop() private sessionId!: string;
}
</script>
