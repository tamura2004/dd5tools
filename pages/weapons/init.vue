<template lang="pug">
  h1.display-4 武器データの初期化中
</template>

<script>
import WEAPON_DATA from "~/assets/data/weapons";

export default {
  async created() {
    let counter = 1;
    const weapons = this.$read("weapons");
    if (weapons.length > 0) {
      alert("既にデータが存在します。処理を中断します。");
      return;
    }
    for (const data of WEAPON_DATA) {
      await this.$write("weapons", data);
      console.log(`${counter}件のデータを書き込みました`);
      counter++;
    }
  }  
}
</script>