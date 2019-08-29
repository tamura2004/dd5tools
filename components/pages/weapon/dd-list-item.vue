<template lang="pug">
  v-list-item(:key="weapon._id" nuxt :to="`/weapons/${weapon._id}/edit`")
    v-list-item-content
      v-list-item-title
        v-layout
          v-flex(xs4) {{ weapon.name }}
          v-flex(xs4) {{ weapon.damage }}[{{ weapon.type }}]
          v-flex(xs2) {{ weapon.cost }}
          v-flex(xs2) {{ weapon.weight }}㍀
      v-list-item-subtitle
        v-layout
          v-flex(xs4) {{ weapon.skill }}
          v-flex(xs8) {{ weapon.properties }}
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["weapon"],
};
</script>
