<template lang="pug">
  v-layout.pa-4(justify-start align-center column)
    .display-2.my-4(@click.stop="$refs.level.dialog = true")
      | {{ level }}
      v-icon mdi-calculator
      dd-tenkey(label="level" v-model="level" ref="level")

    .display-2.my-4(@click.stop="$refs.num.dialog = true")
      | {{ num }}
      v-icon mdi-calculator
      dd-tenkey(label="num" v-model="num" ref="num")

    dd-menu-button(@click="save" color="primary") 決定
</template>

<script>
export default {
  data() {
    return {
      level: 7,
      num: 3,
    };
  },
  methods: {
    save() {
      return;
    },
  },
};
</script>