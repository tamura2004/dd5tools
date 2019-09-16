<template lang="pug">
  v-card
    v-list
      template(v-for="weapon in weapons")
        dd-list-item(:weapon="weapon")
        v-divider(:key="'div' + weapon._id")
</template>

<script>
import ddListItem from "~/components/pages/weapon/dd-list-item";
import { items } from "~/assets/data/weapon-categories";

export default {
  components: {
    ddListItem,
  },
  computed: {
    weapons() {
      return this.$read(
        "weapons",
        v => !this.$nav.query || v.category === this.$nav.query,
      );
    },
  },
  created() {
    this.$nav.data = {
      title: "武器",
      search: true,
      items: items,
      add: true,
      path: "/weapons/new",
    };
  },
};
</script>
