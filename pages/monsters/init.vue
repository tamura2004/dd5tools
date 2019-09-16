<template lang="pug">
  v-layout.pa-4(justify-start align-center column)
    .display-3.my-8 モンスターデータの初期化中
    v-progress-circular(:size="100" :width="10" color="primary" indeterminate)
</template>

<script>
import MONSTER_DATA from "~/assets/data/monsters";

export default {
  async mounted() {
    const monsters = this.$read("monsters");
    if (monsters.length > 0) {
      alert("既にデータが存在します。処理を中断します。");
      this.$router.push("/monsters");
    }
    for (const data of MONSTER_DATA) {
      await this.$write("monsters", data);
    }
    this.$router.push("/monsters");
  },
};
</script>