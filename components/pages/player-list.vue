<template lang="pug">
  v-list-item(three-lint :key="player.id" nuxt :to="`/players/${player.id}`")
    v-list-item-avatar
      v-img(:src="`/img/${player.avatar || '032-leprechaun.png'}`")
    v-list-item-content
      v-list-item-title
        v-layout
          v-flex(xs8) {{ player.characterName }}
          v-flex(xs4) PL:{{ player.name }}
      v-list-item-subtitle
        v-layout
          v-flex(xs6) {{ player.klass }}/{{ guild(player.guildId) && guild(player.guildId).exp }}exp
          v-flex(xs6) {{ player.race }}/{{ player.background}}
      v-list-item-subtitle
        v-layout
          v-flex(xs4) AC:{{ player.ac }}
          v-flex(xs4) hp:{{ player.hp }}
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["player"],
  computed: {
    ...mapGetters("guilds", ["guild"]),
  },
};
</script>

<style lang="stylus" scoped></style>
