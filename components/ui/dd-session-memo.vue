<template lang="pug">
div
  dd-body(v-if="title !== undefined") アドベンチャー
  dd-adventure-memo(:adventure="$adventure.data")
  dd-body(v-if="title !== undefined") 環境
  dd-environment-memo.mt-2(:environment="$environment.data")
  dd-body(v-if="title !== undefined") 遭遇
  dd-encounter-memo.mt-2(:encounter="$encounter.data")
</template>

<script>
export default {
  props: ["title"],
};
</script>