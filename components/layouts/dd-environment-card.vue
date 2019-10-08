<template lang="pug">
  v-card.mb-6(width="100%" @click="$emit('click', environment)")
    v-card-title
      dd-headline {{ environment.place | name }}
    v-card-text
      dd-body 移動手段：{{ environment.vehicle | name }}
      dd-body 要求技能：《{{ environment.skill | name }}》{{ environment.dc }}
      dd-body 消費時間：{{ 20 - environment.dc }}
</template>

<script>
export default {
  props: ["environment"],
};
</script>
