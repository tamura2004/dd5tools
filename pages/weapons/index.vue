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
    ...mapGetters("nav", ["query"]),
    filteredWeapons() {
      return this.weapons.filter(
        weapon => !this.query || weapon.category === this.query,
      );
    },
  },
  methods: {
    ...mapActions("nav", ["search", "items", "add", "path"]),
  },
  created() {
    this.$title("武器");
    this.search(true);
    this.items(items);
    this.add(true);
    this.path("/weapons/new");
  },
  destroyed() {
    this.search(false);
    this.add(false);
  },
};
</script>
