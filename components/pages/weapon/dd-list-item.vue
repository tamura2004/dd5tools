<template lang="pug">
  v-list-item(:key="weapon._id" nuxt :to="`/weapons/${weapon._id}/edit`")
    v-list-item-content
      v-list-item-title
        v-layout
          v-flex(xs6) {{ weapon.name }}
          v-flex(xs4) {{ weapon.damage }}[{{ weapon.type }}]
          v-flex(xs2) {{ weapon.weight }}
      v-list-item-subtitle
        v-layout
          v-flex(xs4) {{ weapon.category }}
          v-flex(xs2) {{ weapon.price }}
          v-flex(xs6) {{ weapon.special }}
</template>

<script>
export default {
  props: ["weapon"],
};
</script>
