<template lang="pug">
  .headline SessionEncounter
    v-btn(to="/encounters/new") 遭遇作成
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SessionEncounter extends Vue {
}
</script>
