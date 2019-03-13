<template lang="pug">
  .headline EncounterForm
    v-btn(block dark to="/encounter/1/battle") モンスター選択
    v-list(two-line)
      template(v-for="(item, index) in items")
        MonsterList(:id="item.id" :num="item.num" :mode="modes[index]" @click="select(index)")
        v-divider
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { MODE } from '@/data/ENCOUNTER_DATA';
import { CREATE_ENCOUNTER } from '@/types/ActionTypes';
import MonsterList from '@/components/MonsterList.vue';
import MonsterGenerator from '@/models/MonsterGenerator';
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
  @Prop() private sessionId!: string;

  private get monsters(): Monster[] {
    return MONSTERS;
  }

  private get session(): Session {
    return this.$store.state.sessions.get(this.sessionId);
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
    const generator = new MonsterGenerator();
    generator.loadPlayers(Array.from(this.players.values()));
    return this.modes.map((mode: MODE) => generator.chooseMonsterId(mode));
  }

  private async select(index: number) {
    const monster = this.monsters[index];
    const encounterId = await this.$store.dispatch(CREATE_ENCOUNTER, {
      sessionId: this.sessionId,
      name: `${monster.num} ${monster.name} attack!`,
    });
  }
}
</script>
