<template lang="pug">
  v-layout.pa-4(justify-start align-center column)
    .display-3.my-8 モンスターデータの初期化中
    v-progress-circular(:size="100" :width="10" color="primary" indeterminate)
</template>

<script>
import MONSTER_DATA from "~/assets/data/monsters";

export default {
  created() {
    this.$store.dispatch("monsters/init", MONSTER_DATA);
    this.$router.push("/monsters");
  },
};
</script>