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
import { mapGetters } from "vuex";
import { crToExp } from "~/assets/data/cr";
import ddListItem from "~/components/pages/monster/dd-list-item";

export default {
  components: {
    ddListItem,
  },
  data: () => ({
    page: 1,
    PER_PAGE: 5,
  }),
  computed: {
    ...mapGetters("monsters", ["monsters"]),
    ...mapGetters("nav/search", ["query"]),
    exp() {
      return crToExp(this.query);
    },
    totalPage() {
      return Math.ceil(this.crList.length / this.PER_PAGE);
    },
    crList() {
      return this.monsters
        .filter(monster => !this.query || monster.exp === this.exp)     
    },
    pageList() {
      return this.crList
        .slice((this.page - 1) * this.PER_PAGE, this.page * this.PER_PAGE);
    },
  },
  created() {
    this.$title("モンスターマニュアル");
  },
};
</script>
