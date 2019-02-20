<template lang="pug">
  div
    //- ListHeader(title="モンスター" :icon="close ? 'add' : 'check'" @click="click")
    //- v-list
    //-   v-list-tile(v-if="close && !monster")
    //-     v-list-tile-content
    //-       v-list-tile-title モンスターがいません
    //-       v-list-tile-sub-title +ボタンで選択
    //-   MonsterTile(v-if="close && monster" :monster="monster")
    //-     v-img(slot="avatar" src="/img/012-devil.png")
    //-   template(v-for="(monster, i) in monsters" v-if="!close")
    //-     MonsterTile(:key="i" :monster="monster")
    //-       v-btn.font-weight-bold(slot="avatar" fab dark small :color="color(i)") {{ difficulty(i) }}
    //-       v-btn(slot="action" icon @click="select(monster)"): v-icon done
    //-     v-divider
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';
  import { db } from '@/plugins/firebase';

  import Floor from '@/models/Floor';
  import { Player } from '@/models/Player';
  import Party from '@/models/Party';
  import State from '@/models/State';
  import MonsterInfo from '@/models/MonsterInfo';

  import ListHeader from '@/components/ListHeader.vue';
  import MonsterInfoTile from '@/components/MonsterInfoTile.vue';
  

  @Component({
    components: {
      ListHeader,
      MonsterInfoTile,
    },
  })
  export default class DungeonFloorMonsters extends Vue {
    @Prop() private id!: string;
    private close: boolean = true;

    private get floor(): Floor {
      return this.$store.state.floors[this.id];
    }

    // private get monster(): any {
    //   return this.floor.monster;
    // }

    private get players(): { [key: string]: Player } {
      return this.$store.state.players;
    }

    private get monsters(): MonsterInfo[] {
      return this.$store.state.monsters;
    }

    private click(): void {
      this.close = !this.close;
      if (!this.close) {
        const party = new Party();
        this.floor.playerIds.forEach((id) => {
          const player = this.players[id];
          if (player.level !== undefined) {
            party.levelNums[player.level] += 1;
          }
        });
        this.$store.commit('setParty', party);
        this.$store.commit('setRandomMonsters');
      }
    }

    // private select(monster: Monster) {
    //   this.close = true;
    //   this.floor.setMonster(monster);
    //   db.collection('floors').doc(this.id).update({
    //     map: this.floor.map,
    //     monster: {...monster},
    //   })
    //     .then()
    //     .catch((err) => alert(err));
    // }

    private color(row: number): string {
      const COLORS = ['green', 'blue', 'blue', 'blue', 'red', 'black'];
      return COLORS[row] || 'error';
    }
    private difficulty(row: number): string {
      const DIFFICULTY = ['簡単', '通常', '通常', '通常', '困難', '死地'];
      return DIFFICULTY[row] || 'error';
    }
  }
</script>

<style lang="stylus" scoped>
</style>
