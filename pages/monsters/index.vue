<template lang="pug">
div
  v-card
    v-list
      template(v-for="monster in pageList")
        dd-list-item(:monster="monster")
        v-divider(:key="'div' + monster._id")
  v-pagination.mt-4(v-model="page" :length="pages")
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { crToExp } from "~/assets/data/cr";
import ddListItem from "~/components/pages/monster/dd-list-item.vue";

export default {
  components: {
    ddListItem,
  },
  middleware: "mongo/monsters",
  computed: {
    ...mapGetters("monsters", ["monsters"]),
    ...mapGetters("nav", ["page", "pages", "query"]),
    exp() {
      return crToExp(this.query);
    },
    totalPage() {
      return Math.ceil(this.crList.length / this.pages);
    },
    crList() {
      return this.monsters.filter(
        monster => !this.query || monster.exp === this.exp,
      );
    },
    pageList() {
      return this.crList.slice(
        (this.page - 1) * this.pages,
        this.page * this.pages,
      );
    },
  },
  created() {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => ({
      text: `CR${i}`,
      value: `${i}`,
    }));
    this.$store.dispatch("nav/set", {
      title: "モンスターマニュアル",
      search: true,
      extension: true,
      items: [{ text: "ALL", value: null }, ...items],
      add: true,
      path: "/monsters/new",
      page: 1,
      pages: 5,
    });
  },
};
</script>
