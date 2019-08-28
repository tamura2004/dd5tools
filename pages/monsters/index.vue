<template lang="pug">
  v-card
    v-list
      template(v-for="monster in monsters")
        dd-list-item(:monster="monster")
        v-divider(:key="'div' + monster._id")
</template>

<script>
import { mapGetters } from "vuex";
import ddListItem from "~/components/pages/monster/dd-list-item";

export default {
  components: {
    ddListItem,
  },
  computed: {
    ...mapGetters("monsters", ["monsters"]),
  },
  created() {
    this.$title("モンスターマニュアル");
  },
};
</script>
