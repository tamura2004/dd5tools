<template lang="pug">
  v-card
    dd-memo(label="依頼人" :memo="adventure.client | name")
    dd-memo(label="協力者" :memo="adventure.friend | name")
    dd-memo(label="導入" :memo="adventure.intro | name")
    dd-memo(label="目的" :memo="adventure.purpose | name")
    dd-memo(label="悪漢" :memo="adventure.villain | name")
    dd-memo(label="ボス" :memo="adventure.monster | name")
    dd-memo(label="決戦" :memo="adventure.climax | name")
</template>

<script>
export default {
  props: ["adventure"]
}
</script>