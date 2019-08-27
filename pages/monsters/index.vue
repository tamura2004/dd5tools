<template lang="pug">
  v-card
    v-list
      template(v-for="monster in monsters")
        app-list(:monster="monster")
        v-divider(:key="'div' + monster._id")
</template>

<script>
import { mapGetters } from "vuex";
import appList from "~/components/pages/monster/app-list";

export default {
  components: {
    appList,
  },
  computed: {
    ...mapGetters("monsters", ["monsters"]),
  },
  created() {
    this.$title("モンスターマニュアル");
  },
};
</script>
