<template lang="pug">
div
  menu-button(label="ダンジョン一覧" color="primary" to="/dungeons")
  menu-button(label="セッション一覧" color="primary" to="/sessions")
  menu-button(label="ギルド一覧" color="primary" to="/guilds")
  menu-button(label="NPC一覧" color="primary" to="/npcs")
  menu-button(label="呪文一覧" color="primary" to="/spells")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
}
</script>
