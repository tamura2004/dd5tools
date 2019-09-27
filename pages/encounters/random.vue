<template lang="pug">
  v-layout.pa-4(justify-start align-center column)
    .headline.my-4
      | {{ $session.event | name }}
    dd-menu-button(@click="roll" color="success") 振り直す
    dd-menu-button(@click="save" color="primary") 決定
</template>

<script>
import PLACE_DATA from "~/assets/data/places";

export default {
  async asyncData({ store, app }) {
    app.$session.data = await store.dispatch("values/findOne", "session");
    app.$nav.title = "遭遇";
  },
  methods: {
    roll() {
      this.$session.event = this.$sample("encounter/event");
    },
    save() {
      this.$write("values", "session", this.$session.data);
    },
  },
};
</script>

<style lang="stylus" scoped>
#img {
  width: 320px;
}
</style>
