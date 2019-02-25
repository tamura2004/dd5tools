<template lang="pug">
  v-layout(jestify-center row wrap v-if="player")
    v-flex.mb-4(xs12)
      .headline.text-xs-center {{ player.characterName }}さん
    v-flex.mb-4(xs12)
      .headline.text-xs-center あなたの冒険者ランクは
    v-flex(xs6 offset-xs3)
      v-card(flat color="green")
        v-container
          v-layout(justify-center)
            v-card-title.display-4.font-weight-black.white--text {{ player.rank }}
    v-flex.mt-4(xs12)
      .headline.text-xs-center です
    MenuButton(label="受付へ" color="primary" to="/guild/selectPlayer")
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Player } from '@/models/Player';
import MenuButton from '@/components/MenuButton.vue';

@Component({
  components: {
    MenuButton,
  },
})
export default class GuildRank extends Vue {
  @Prop() private playerId!: string;
  private get player(): Player {
    return this.$store.state.players[this.playerId];
  }
}
</script>
