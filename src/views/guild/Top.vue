<template lang="pug">
  v-app
    v-toolbar(app dark flat dense color="primary")
      v-btn(icon to="/")
        v-icon home
      v-toolbar-title.headline
        span 冒険者ギルド
    v-content
      v-container(fluid)
        v-layout(jestify-center row wrap)
          v-flex(xs12)
            .headline.text-xs-center いらっしゃいませ
          v-flex(xs12)
            .headline.text-xs-center ギルドカードをご提示ください
          v-flex(xs6 offset-xs3)
            v-card(flat)
              v-img(src="/img/kaisya_uketsuke_woman.png")
        MenuButton(label="新規登録" color="success" to="/player/new")
        MenuButton(label="ギルドカード提示" color="primary" to="/guild/selectPlayer")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MenuButton from '@/components/MenuButton.vue';

@Component({
  components: {
    MenuButton,
  },
})
export default class GuildTop extends Vue {
}
</script>
