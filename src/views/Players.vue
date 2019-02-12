<template lang="pug">
  v-app
    v-toolbar
      v-btn(icon @click="$router.go(-1)"): v-icon keyboard_arrow_left
      v-toolbar-title.text-xs-center ＰＣ一覧
      v-spacer
      v-btn(icon @click="$router.push('/playerForm/new')"): v-icon add
    v-list(two-line)
      PlayerList(v-for="(player, key) in players" :id="key" :key="key")
    v-card-text#footer
    p.mt-5 designed by Freepik from Flaticon

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
