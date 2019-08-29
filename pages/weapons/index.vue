<template lang="pug">
  v-card
    v-list
      template(v-for="weapon in weapons")
        dd-list-item(:weapon="weapon")
        v-divider(:key="'div' + weapon._id")
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ddListItem from "~/components/pages/weapon/dd-list-item";

export default {
  components: {
    ddListItem,
  },
  middleware: "mongo/weapons",
  computed: mapGetters("weapons", ["weapons"]),
  methods: {
    ...mapActions("nav", ["search", "items", "add", "path"]),
  },
  created() {
    this.$title("武器");
    this.search(true);
    this.items([
      { id: 0, label: "ALL", value: 0 },
      { id: 1, label: "単近", value: 1 },
      { id: 2, label: "単遠", value: 2 },
      { id: 3, label: "軍近", value: 3 },
      { id: 4, label: "軍遠", value: 4 },
      { id: 5, label: "魔法", value: 5 },
    ]);
    this.add(true);
    this.path("/weapons/new");
  },
  destroyed() {
    this.search(false);
    this.add(false);
  },
};
</script>
