<template lang="pug">
  v-card
    v-card-title {{ title }}
    v-divider
    v-card-text
      v-form
        v-text-field(label="名称" :value="data.name" @input="name($event)")
        v-select(label="分類" :items="items" :value="data.category" @input="category($event)")
        v-text-field(label="価格" :value="data.price" @input="price($event)")
        v-text-field(label="ダメージダイス" :value="data.damage" @input="damage($event)")
        v-text-field(label="ダメージ種別" :value="data.type" @input="type($event)")
        v-text-field(label="重量" :value="data.weight" @input="weight($event)")
        v-text-field(label="特性" :value="data.special" @input="special($event)")
    v-card-actions
      v-btn(color="primary" @click="$emit('click')") 登録
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { items } from "~/assets/data/weapon-categories";

export default {
  props: ["title"],
  computed: {
    ...mapGetters("form/weapon", ["data"]),
    items() {
      return items;
    }
  },
  methods: mapActions("form/weapon", [
    "name",
    "category",
    "price",
    "damage",
    "type",
    "weight",
    "special",
  ]),
};
</script>

<style scoped>
</style>