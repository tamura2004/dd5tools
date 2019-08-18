<template lang="pug">
  v-card.mt-4
    v-toolbar(flat)
      v-toolbar-title プレイヤー一覧
      v-spacer
      v-switch.pt-8(color="primary" v-model="edit")
    v-divider
    v-list-item(three-lint v-for="player in collection" :key="player.id")
      v-list-item-avatar
        v-img(:src="`/img/${player.avatar || '032-leprechaun.png'}`")
      v-list-item-content
        v-list-item-title
          v-layout
            v-flex(xs8) {{ player.characterName }}
            v-flex(xs4) PL:{{ player.name }}
        v-list-item-subtitle
          v-layout
            v-flex(xs6) {{ player.klass }}
            v-flex(xs6) {{ player.race }}/{{ player.background}}
        v-list-item-subtitle
          v-layout
            v-flex(xs4) AC:{{ player.ac }}
            v-flex(xs4) hp:{{ player.hp }}
        v-divider
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    edit: false,
  }),
  computed: mapGetters("players", ["collection"]),
};
</script>

<style lang="stylus" scoped></style>
