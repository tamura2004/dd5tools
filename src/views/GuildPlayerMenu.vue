<template lang="pug">
  v-container(fluid)
    v-layout(jestify-center row wrap)
      v-flex(xs12)
        .headline.text-xs-center {{ player && player.characterName }}さん
      v-flex(xs12)
        .headline.text-xs-center ご用件をどうぞ
      v-flex(xs6 offset-xs3)
        v-card(flat)
          v-img(src="/img/kaisya_uketsuke_woman.png")
      v-flex(xs12)
        MenuButton(label="クエスト" color="primary" to="quests")
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import MenuButton from '@/components/MenuButton.vue';
import { Player } from '@/models/Player';

@Component({
  components: {
    MenuButton,
  },
})
export default class GuildPlayerMenu extends Vue {
  @Prop() private playerId!: string;

  private get player(): Player | undefined {
    return this.$store.state.players[this.playerId];
  }
}
</script>
