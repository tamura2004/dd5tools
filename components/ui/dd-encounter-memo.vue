<template lang="pug">
  v-card
    dd-memo(label="ボス" :memo="encounter.boss | name")
    dd-memo(:label="`雑魚x${encounter.num}`" :memo="encounter.zako | name")
    dd-memo(label="難易度" :memo="encounter.mode && encounter.mode.kanji")
    dd-memo(label="exp" :memo="encounter.exp")
    dd-memo(label="手掛かり" :memo="encounter.clue")
    dd-memo(label="報酬" :memo="encounter.prise | name")
</template>

<script>
export default {
  props: ["encounter"],
};
</script>