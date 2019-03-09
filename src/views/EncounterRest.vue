<template lang="pug">
  .headline EncounterRest
    v-btn(to="/") セッション終了
    v-btn(to="/encounters/new") 次の遭遇へ
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class EncounterRest extends Vue {
}
</script>
