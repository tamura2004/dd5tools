<template lang="pug">
  v-card
    v-card-title {{ title }}
    v-divider
    v-card-text
      v-form
        v-text-field(label="名称" :value="data.name" @input="name($event)")
        v-text-field(label="サイズ" :value="data.size" @input="size($event)")
        v-text-field(label="種別" :value="data.type" @input="type($event)")
        v-text-field(label="属性" :value="data.alignment" @input="alignment($event)")
        v-text-field(label="AC" type="number" :value="data.ac" @input="ac($event)")
        v-text-field(label="hp" type="number" :value="data.hp" @input="hp($event)")
        v-text-field(label="移動" :value="data.mv" @input="mv($event)")
        v-text-field(label="exp" type="number" :value="data.exp" @input="exp($event)")
        dd-array-field(:value="data.ability")
        v-textarea(
          label="属性"
          auto-grow
          :value="data.attributes.join('\\n')"
          @input="attributes($event.split('\\n'))"
        )
        v-textarea(
          label="アクション"
          auto-grow
          :value="data.actions.join('\\n')"
          @input="actions($event.split('\\n'))"
        )
        v-textarea(
          label="特殊能力"
          auto-grow
          :value="data.specials.join('\\n')"
          @input="specials($event.split('\\n'))"
        )
    v-card-actions
      v-btn(color="primary" @click="$emit('click')") 登録
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ddArrayField from "~/components/ui/dd-array-field"

export default {
  components: {
    ddArrayField,
  },
  props: ["title"],
  computed: mapGetters("form/monster", ["data"]),
  methods: mapActions("form/monster", [
    "name",
    "size",
    "type",
    "alignment",
    "ac",
    "hp",
    "mv",
    "ability",
    "exp",
    "attributes",
    "actions",
    "specials",
  ]),
};
</script>

<style scoped>
</style>