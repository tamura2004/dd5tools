<template lang="pug">
    div
      v-layout.grey.darken-4.mt-1
        v-flex(xs11): .caption.white--text.py-1.px-2 PC
        v-flex(xs1 v-if="close"): v-icon(dark @click="close = !close") add
        v-flex(xs1 v-else): v-icon(dark @click="close = !close") check

      v-list(v-if="players")
        v-list-tile(v-if="close && select.length === 1")
          v-list-tile-title プレイヤーがいません（＋ボタンで選択）
        template(v-for="(player, key) in players")
          v-list-tile(v-if="!close || select.includes(key)")
            v-list-tile-avatar(tile)
              v-img(:src="`/img/${player.avatar}`")
            v-list-tile-content
              v-list-tile-title
                v-layout
                  v-flex.text-truncate(xs6) {{ player.characterName }}
                  v-flex(xs6) {{ player.klass }}{{ player.level }}
              v-list-tile-sub-title
                v-layout
                  v-flex(xs8) {{ player.race }}/{{ player.background }}
                  v-flex(xs4) PL:{{ player.name }}
            v-list-tile-action(v-if="!close")
              v-switch(v-model="select" :value="key" color="primary")
          v-divider
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';
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
    private select: string[] = [''];

    private get floor(): Floor | undefined {
      return this.$store.state.floors[this.id];
    }

    private get players(): { [key: string]: Player } {
      return this.$store.state.players;
    }
  }
</script>

<style lang="stylus" scoped>
</style>
