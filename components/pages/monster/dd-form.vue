<template lang="pug">
  v-card
    v-card-title {{ title }}
    v-divider
    v-card-text
      v-form
        v-text-field(label="名前" :value="data.name" @input="name($event)")
        v-textarea(
          label="属性"
          :value="data.attributes.join('\\n')"
          @input="attributes($event.split('\\n'))"
        )
    v-card-actions
      v-btn(color="primary" @click="$emit('click')") 登録
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: ["title"],
  computed: mapGetters("form/monster", ["data"]),
  methods: mapActions("form/monster", ["name", "attributes"]),
};
</script>

<style scoped>
</style>