<template lang="pug">
  v-card
    v-list
      template(v-for="player in players")
        dd-list-item(:player="player")
        v-divider(:key="'div' + player.id")
</template>

<script>
import { mapGetters } from "vuex";
import ddListItem from "~/components/pages/player/dd-list-item";

export default {
  components: {
    ddListItem,
  },
  data: () => ({
    edit: false,
  }),
  computed: {
    ...mapGetters("players", ["players"]),
    ...mapGetters("guilds", ["guild"]),
  },
  created() {
    this.$nav({ title: "冒険者名簿" });
  },
};
</script>

<style lang="stylus" scoped></style>
