<template lang="pug">
  v-list-item(:key="monster._id" nuxt :to="`/monsters/${monster}._id}`")
    v-list-item-content
      v-list-item-title
        v-layout
          v-flex(xs8) {{ monster.name }}
          v-flex.body-2(xs4) {{monster.size}}の{{ monster.type }}
      v-list-item-subtitle
        v-layout
          v-flex.body-2(xs4) AC:{{ monster.ac }}
          v-flex.body-2(xs4) hp:{{ monster.hp }}
          v-flex.body-2(xs4) CR:{{ monster | cr }}
      v-list-item-subtitle
        v-layout
          v-flex.body-2(xs8) 移動:{{ monster.mv }}
          v-flex.body-2(xs4) {{ monster.alignment }}
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["monster"],
};
</script>
