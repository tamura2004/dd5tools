<template lang="pug">
div
  v-card
    v-list
      template(v-for="monster in monsters")
        dd-list-item(:monster="monster")
        v-divider
</template>

<script>
import ddListItem from "~/components/pages/monster/dd-list-item.vue";
import { items } from "~/assets/data/cr";

export default {
  components: {
    ddListItem,
  },
  asyncData({ query, app }) {
    const exp = parseInt(query.exp);
    const monsters = exp
      ? app.$read("monsters", { exp })
      : app.$read("monsters");
    return { monsters };
  },
  computed: {
    totalPage() {
      return Math.ceil(this.crList.length / this.$nav.pages);
    },
    crList() {
      return this.monsters;
    },
    pageList() {
      return this.crList.slice(
        (this.$nav.page - 1) * this.$nav.pages,
        this.$nav.page * this.$nav.pages,
      );
    },
  },
  created() {
    this.$nav.data = {
      title: "モンスターマニュアル",
      search: false,
      query: this.cr,
      extension: false,
      items,
      add: false,
      path: "/monsters/new",
      page: 1,
      pages: 10,
    };
  },
};
</script>
