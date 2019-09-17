<template lang="pug">
  v-card
    dd-list-item(:player="id | player")
    nuxt-child
</template>

<script>
import ddListItem from "~/components/pages/player/dd-list-item";

export default {
  components: {
    ddListItem,
  },
  asyncData({ params }) {
    const id = params.id;
    return { id };
  },
  computed: {
    player() {
      return this.$read("players", this.id);
    }
  },
  created() {
    this.$nav.title = this.player.characterName;
  },
};
</script>
