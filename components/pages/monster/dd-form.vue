<template lang="pug">
  v-card
    v-card-title {{ title }}
    v-divider
    v-card-text
      v-form
        v-text-field(label="名称" v-model="$monster.name")
        v-text-field(label="サイズ" v-model="$monster.size")
        v-text-field(label="種別" v-model="$monster.type")
        v-text-field(label="属性" v-model="$monster.alignment")
        v-text-field(label="AC" type="number" v-model="$monster.ac")
        v-text-field(label="hp" type="number" v-model="$monster.hp")
        v-text-field(label="移動" v-model="$monster.mv")
        v-text-field(label="exp" type="number" v-model="$monster.exp")
        dd-array-field(v-model="$monster.ability")
        v-textarea(
          label="属性"
          auto-grow
          v-model="$monster.attributes"
        )
        v-textarea(
          label="アクション"
          auto-grow
          v-model="$monster.actions"
        )
        v-textarea(
          label="特殊能力"
          auto-grow
          v-model="$monster.specials"
        )
    v-card-actions
      v-btn(color="primary" @click="$emit('click')") 登録
</template>

<script>
import ddArrayField from "~/components/ui/dd-array-field";

export default {
  components: {
    ddArrayField,
  },
  props: ["title"],
};
</script>

<style scoped>
</style>