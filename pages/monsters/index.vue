<template lang="pug">
div
  v-card
    v-list
      template(v-for="monster in pageList")
        dd-list-item(:monster="monster")
        v-divider(:key="'div' + monster._id")
  v-pagination.mt-4(v-model="page" :length="totalPage")
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { crToExp } from "~/assets/data/cr";
import ddListItem from "~/components/pages/monster/dd-list-item";

export default {
  components: {
    ddListItem,
  },
  middleware: "mongo/monsters",
  data: () => ({
    page: 1,
    PER_PAGE: 5,
  }),
  computed: {
    ...mapGetters("monsters", ["monsters"]),
    ...mapGetters("nav", ["query"]),
    exp() {
      return crToExp(this.query);
    },
    totalPage() {
      return Math.ceil(this.crList.length / this.PER_PAGE);
    },
    crList() {
      return this.monsters.filter(
        monster => !this.query || monster.exp === this.exp,
      );
    },
    pageList() {
      return this.crList.slice(
        (this.page - 1) * this.PER_PAGE,
        this.page * this.PER_PAGE,
      );
    },
  },
  methods: mapActions("nav", ["search", "items", "add", "path"]),
  created() {
    this.$title("モンスターマニュアル");
    this.search(true);
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => ({
      text: `CR${i}`,
      value: `${i}`,
    }));
    this.items([{ text: "ALL", value: null }, ...items]);
    this.add(true);
    this.path("/monsters/new");
  },
  destroyed() {
    this.search(false);
    this.add(false);
  },
};
</script>
