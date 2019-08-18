<template lang="pug">
  app-bar(title="キャラクターシート")
    v-card
      player-list(:player="pl || $router.push('/players')")
      nuxt-child
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
  asyncData({ params }) {
    const id = params.id;
    return { id };
  },
  computed: {
    ...mapGetters("players", ["player"]),
    pl() {
      return this.player(this.id);
    }
  },
};
</script>
