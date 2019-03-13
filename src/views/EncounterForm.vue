<template lang="pug">
  .headline EncounterForm
    v-btn(block dark to="/encounter/1/battle") モンスター選択
    v-list(two-line)
      template(v-for="(item, index) in items")
        MonsterList(:id="item.id" :num="item.num" :mode="modes[index]")
        v-divider
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { MODE } from '@/data/ENCOUNTER_DATA';
import MonsterList from '@/components/MonsterList.vue';
import Encounter from '@/models/Encounter';
import Session from '@/models/Session';
import Player from '@/models/Player';
import Monster from '@/models/Monster';
import MONSTERS from '@/data/MONSTERS';

@Component({
  components: {
    MonsterList,
  },
})
export default class EncounterForm extends Vue {
  @Prop() private sessionid!: string;

  private get monsters(): Monster[] {
    return MONSTERS;
  }

  private get session(): Session {
    return this.$store.state.sessions.get(this.sessionid);
  }

  private get players(): Map<string, Player> {
    return this.$store.state.players;
  }

  private get party(): Player[] {
    const ret = [];
    for (const id of this.session.playerIds) {
      const player = this.players.get(id);
      if (player !== undefined) {
        ret.push(player);
      }
    }
    return ret;
  }

  private modes: MODE[] = [
    MODE.EASY,
    MODE.NORMAL,
    MODE.NORMAL,
    MODE.NORMAL,
    MODE.HARD,
    MODE.HELL,
  ];

  private get items() {
    const encounter = new Encounter();
    encounter.loadPlayers(Array.from(this.players.values()));
    return this.modes.map((mode: MODE) => encounter.chooseMonsterId(mode));
  }
}
</script>
