<template lang="pug">
div
  v-card
    v-list
      template(v-for="monster in pageList")
        dd-list-item(:monster="monster")
        v-divider(:key="'div' + monster._id")
  v-pagination.mt-4(:value="page" @input="$store.dispatch('nav/page', $event)" :length="totalPage")
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { items } from "~/assets/data/cr";
import ddListItem from "~/components/pages/monster/dd-list-item.vue";

export default {
  components: {
    ddListItem,
  },
  middleware: "mongo/monsters",
  asyncData({ query }) {
    const cr = query.cr;
    return { cr };
  },
  computed: {
    ...mapGetters("monsters", ["monsters"]),
    ...mapGetters("nav", ["page", "pages", "query"]),
    totalPage() {
      return Math.ceil(this.crList.length / this.pages);
    },
    crList() {
      return this.monsters.filter(
        monster => !this.query || monster.exp === this.query,
      );
    },
    pageList() {
      return this.crList.slice(
        (this.page - 1) * this.pages,
        this.page * this.pages,
      );
    },
  },
  methods: mapActions("nav", ["set"]),
  created() {
    this.$store.dispatch("nav/set", {
      title: "モンスターマニュアル",
      search: true,
      query: this.cr,
      extension: true,
      items,
      add: true,
      path: "/monsters/new",
      page: 1,
      pages: 5,
    });
  },
};
</script>
