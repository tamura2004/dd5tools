<template lang="pug">
  v-card
    v-card-title {{ title }}
    v-divider
    v-card-text
      v-form
        v-text-field(label="名称" :value="data.name" @input="name($event)")
        v-text-field(label="分類" :value="data.skill" @input="skill($event)")
        v-text-field(label="価格" :value="data.cost" @input="cost($event)")
        v-text-field(label="ダメージダイス" :value="data.damage" @input="damage($event)")
        v-text-field(label="ダメージ種別" :value="data.type" @input="type($event)")
        v-text-field(label="重量" type="number" :value="data.weight" @input="weight($event)")
        v-textarea(
          label="特性"
          auto-grow
          :value="data.properties"
          @input="properties($event)"
        )
    v-card-actions
      v-btn(color="primary" @click="$emit('click')") 登録
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: ["title"],
  computed: mapGetters("form/weapon", ["data"]),
  methods: mapActions("form/weapon", [
    "name",
    "skill",
    "cost",
    "damage",
    "type",
    "weight",
    "properties",
  ]),
};
</script>

<style scoped>
</style>