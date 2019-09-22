<template lang="pug">
div
  v-card
    v-list
      template(v-for="monster in pageList")
        dd-list-item(:monster="monster")
        v-divider
  v-pagination.mt-4(v-model="$nav.page" :length="totalPage")
</template>

<script>
import ddListItem from "~/components/pages/monster/dd-list-item.vue";
import { items } from "~/assets/data/cr";

export default {
  components: {
    ddListItem,
  },
  asyncData({ query }) {
    const cr = query.cr;
    return { cr };
  },
  computed: {
    totalPage() {
      return Math.ceil(this.crList.length / this.$nav.pages);
    },
    crList() {
      return this.$read(
        "monsters",
        v => !this.$nav.query || v.exp === this.$nav.query,
      );
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
      search: true,
      query: this.cr,
      extension: true,
      items,
      add: true,
      path: "/monsters/new",
      page: 1,
      pages: 5,
    };
  },
};
</script>
