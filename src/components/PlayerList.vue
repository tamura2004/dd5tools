<template lang="pug">
  div
    v-list-tile
      v-list-tile-action
        v-container.ma-0.pa-0
          v-layout(justify-center)
            .caption INIT
          v-layout(justify-center)
            .display-1.red--text {{ hp }}
      Avatar(v-model="avatar")
      v-list-tile-content(@click="$emit('click')")
        v-list-tile-title
          v-layout
            v-flex.text-truncate(xs9) {{ player.characterName }}
            v-flex.caption(xs3) PL:{{ player.name }}
        v-list-tile-sub-title
          v-layout
            v-flex.text-truncate(xs6) {{ player.klass }}{{ player.level }}
            v-flex.text-truncate(xs6) {{ player.race }}/{{ player.background }}
        v-list-tile-sub-title
          v-layout
            v-flex(xs3) {{ player.ac }}
            v-flex(xs3) AC:{{ player.ac }}
            v-flex(xs3) hp:{{ player.maxHp }}
      v-list-tile-action
        v-container.ma-0.pa-0
          v-layout(justify-center)
            .caption 残hp
          v-layout(justify-center)
            .display-1.red--text {{ hp }}
    v-divider

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Player } from '@/models/Player';
import { db } from '@/plugins/firebase';
import Avatar from '@/components/Avatar.vue';
// import { AVATER } from '@/data/DATA';

@Component({
  components: {
    Avatar,
  },
})
export default class PlayerList extends Vue {
  @Prop() private id!: string;

  private get hp(): number | undefined {
    if (this.player !== undefined) {
      return this.player.hp;
    }
  }

  private get avatar(): string | undefined {
    if (this.player !== undefined) {
      return this.player.avatar;
    }
  }

  private set avatar(value: string | undefined) {
    if (value !== undefined) {
      db.collection('players').doc(this.id).update({
        avatar: value,
      })
        .then()
        .catch((err) => alert(err));
    }
  }

  private get player(): Player | undefined {
    return this.$store.state.players[this.id];
  }
}
</script>

<style lang="stylus">
</style>
