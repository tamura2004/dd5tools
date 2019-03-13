<template lang="pug">
div
  v-btn.mt-4(large block dark color="primary" to="/sessions") セッション一覧
  v-btn.mt-4(large block dark color="success" to="/sessions/new") 新規セッション
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
}
</script>
