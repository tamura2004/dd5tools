<template lang="pug">
  v-app
    v-toolbar(app flat dark dense)
      v-btn(icon @click="$router.go(-1)"): v-icon arrow_back_ios
      v-toolbar-title.text-xs-center ＰＣ一覧
      v-spacer
      v-btn(icon @click="$router.push('/playerForm/new')"): v-icon add
    v-content(app)
      v-list(two-line)
        PlayerList(
          v-for="(player, key) in players"
          :id="key"
          :key="key"
          @click="$router.push(`/player/${key}`)"
        )
          v-icon arrow_forward_ios
      p.ma-1 designed by Freepik from Flaticon

</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import PlayerList from '@/components/PlayerList.vue';
  import { db } from '@/plugins/firebase';

  @Component({
    components: {
      PlayerList,
    },
  })
  export default class Players extends Vue {
    private get players() {
        return this.$store.state.players;
    }
  }
</script>

<style lang="stylus" scoped>
</style>
