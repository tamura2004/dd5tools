<template lang="pug">
  v-card
    dd-memo(label="場所" :memo="environment.place | name")
    dd-memo(label="移動手段" :memo="environment.vehicle | name")
    dd-memo(label="要求技能" :memo="environment.skill | name")
    dd-memo(label="難易度" :memo="environment.dc")
</template>

<script>
export default {
  props: ["environment"],
};
</script>