<template lang="pug">
  app-bar(title="冒険者名簿")
    v-card
      v-list
        template(v-for="player in players")
          player-list(:player="player")
          v-divider(:key="'div' + player.id")
</template>

<script>
import { mapGetters } from "vuex";
import appBar from "~/components/layouts/app-bar";
import playerList from "~/components/pages/player-list";

export default {
  components: {
    appBar,
    playerList,
  },
  data: () => ({
    edit: false,
  }),
  computed: {
    ...mapGetters("players", ["players"]),
    ...mapGetters("guilds", ["guild"]),
  },
};
</script>

<style lang="stylus" scoped></style>
