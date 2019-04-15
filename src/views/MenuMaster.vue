<template lang="pug">
div
  menu-button(label="セッション一覧" color="primary" to="/sessions")
  menu-button(label="新規セッション" color="success" to="/sessions/new")
  menu-button(label="NPC一覧" color="primary" to="/npcs")
  menu-button(label="新規NPC" color="success" to="/npcs/new")
  menu-button(label="呪文一覧" color="primary" to="/spells")
  menu-button(label="新規呪文" color="success" to="/spells/new")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
}
</script>
