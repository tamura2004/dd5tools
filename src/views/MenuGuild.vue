<template lang="pug">
  v-container(fluid)
    v-layout(jestify-center row wrap)
      v-flex(xs12)
        menu-button(label="ギルドカード提示" color="primary" to="/players")
      v-flex(xs12)
        menu-button(label="新規登録" color="success" to="/players/new")
      v-flex(xs12)
        .headline.text-xs-center いらっしゃいませ
      v-flex(xs12)
        .headline.text-xs-center ギルドカードをご提示ください
      v-flex(xs12)
        .headline.text-xs-center または新規登録ですか
      v-flex(xs6 offset-xs3)
        v-card(flat)
          v-img(src="/img/kaisya_uketsuke_woman.png")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class GuildReception extends Vue {
}
</script>
