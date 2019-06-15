<template lang="pug">
  .headline ギルド一覧
    v-list(two-line)
      template(v-for="[key, guild] in Array.from(guilds)")
        guild-tile(:guildId="key" :key="key")
        v-divider

    v-btn(dark block color="primary" to="/guilds/new") 新規ギルド
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';

@Component({
  computed: {
    ...mapState(['guilds']),
  },
})
export default class GuildIndex extends Vue {
}
</script>
