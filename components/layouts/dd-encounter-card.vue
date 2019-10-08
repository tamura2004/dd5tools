<template lang="pug">
  v-card.mb-6(width="100%" height="100%" @click="$emit('click', encounter)" v-if="encounter")
    v-card-title.title
      dd-headline {{ encounter.boss | name }}
    v-card-text
      dd-body {{ encounter.zako | name }} * {{ encounter.num }}
      dd-body {{ encounter.reason | name }}
      dd-body 難易度：{{ encounter.mode && encounter.mode.kanji }} / {{ encounter.exp }} exp
      dd-body 手掛かり：{{ encounter.clue }}
      dd-body 報酬：{{ encounter.prise | name }}
</template>

<script>
export default {
  props: ["encounter"],
};
</script>
