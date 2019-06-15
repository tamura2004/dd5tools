<template lang="pug">
  v-list-tile(
    :to="`/guild/${guildId}/players`"
  )
    v-list-tile-content
      v-list-tile-title {{ guild.name }}
      v-list-tile-sub-title {{ guild.description }}
    v-list-tile-action
      v-icon arrow_forward_ios
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class GuildTile extends Vue {
  @Prop() private guildId!: string;

  private get guild() {
    return this.$store.getters.guild(this.guildId);
  }
}
</script>
