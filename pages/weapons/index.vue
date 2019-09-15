<template lang="pug">
  v-card
    v-list
      template(v-for="weapon in filteredWeapons")
        dd-list-item(:weapon="weapon")
        v-divider(:key="'div' + weapon._id")
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ddListItem from "~/components/pages/weapon/dd-list-item";
import { items } from "~/assets/data/weapon-categories";

export default {
  components: {
    ddListItem,
  },
  middleware: "mongo/weapons",
  computed: {
    ...mapGetters("weapons", ["weapons"]),
    filteredWeapons() {
      return this.weapons.filter(
        weapon => !this.$nav.query || weapon.category === this.$nav.query,
      );
    },
  },
  created() {
    this.$store.dispatch("nav/set", {
      title: "武器",
      search: true,
      items: items,
      add: true,
      path: "/weapons/new",
    });
  },
};
</script>
