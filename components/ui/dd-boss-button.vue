<template lang="pug">
  dd-menu-button(:to="`/monsters/${boss && boss.id}`" color="error") ボス戦へ
</template>

<script>
export default {
  props: ["boss"]
}
</script>