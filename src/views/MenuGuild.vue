<template lang="pug">
  v-container(fluid)
    v-layout(jestify-center row wrap)
      v-flex(xs12)
        .headline.text-xs-center いらっしゃいませ
      v-flex(xs12)
        .headline.text-xs-center ギルドカードをご提示ください
      v-flex(xs6 offset-xs3)
        v-card(flat)
          v-img(src="/img/kaisya_uketsuke_woman.png")
      v-flex(xs12)
        MenuButton(label="新規登録" color="success" to="player/new/form")
      v-flex(xs12)
        MenuButton(label="ギルドカード提示" color="primary" to="/players")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MenuButton from '@/components/MenuButton.vue';

@Component({
  components: {
    MenuButton,
  },
})
export default class GuildReception extends Vue {
  private created(): void {
    this.$store.commit('layout/toolbar', true);
    this.$store.commit('layout/color', 'primary');
    this.$store.commit('layout/title', '冒険者ギルド');
  }
}
</script>
