<template lang="pug">
  v-card.mb-6(width="100%" height="100%" @click="$emit('click', encounter)" v-if="encounter")
    v-card-title.title
      | {{ encounter.boss | name }}
    v-card-text
      .body-1 {{ encounter.zako | name }} * {{ encounter.num }}
      .body-1 {{ encounter.reason | name }}
      .body-1 難易度：{{ encounter.mode && encounter.mode.kanji }} / {{ encounter.exp }} exp
      .body-1 手掛かり：{{ encounter.clue }}
      .body-1 報酬：{{ encounter.prise | name }}
</template>

<script>
export default {
  props: ["encounter"],
};
</script>
