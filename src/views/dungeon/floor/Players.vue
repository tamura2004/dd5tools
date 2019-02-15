<template lang="pug">
    div
      ListHeader(title="pc" :icon="close ? 'add' : 'check'" @click="close = !close")
      v-list(v-if="players")
        v-list-tile(v-if="close && select.length === 0")
          v-list-tile-title プレイヤーがいません（＋ボタンで選択）
        v-divider
        PlayerList(v-for="(player, key) in players" :id="key" v-if="!close || select.includes(key)")
          v-list-tile-action(v-if="!close")
            v-switch(v-model="select" :value="key" color="primary")
</template>

<script lang="ts">
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
  import { db } from '@/plugins/firebase';
  import ListHeader from '@/components/ListHeader.vue';
  import PlayerList from '@/components/PlayerList.vue';
  import Floor from '@/models/Floor.vue';
  import Player from '@/models/Player.vue';

  @Component({
    components: {
      ListHeader,
      PlayerList,
    },
  })
  export default class DungeonFloorPlayers extends Vue {
    @Prop() private id!: string;
    private close: boolean = true;

    private get select(): string[] | undefined {
      return this.$store.state.floors[this.id].playerIds;
    }

    private set select(value) {
      db.collection('floors').doc(this.id).update({ playerIds: value })
        .then()
        .catch((err) => alert(err));
    }

    private get players(): { [key: string]: Player } {
      return this.$store.state.players;
    }
  }
</script>

<style lang="stylus" scoped>
</style>
