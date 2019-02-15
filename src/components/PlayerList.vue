<template lang="pug">
  div
    v-list-tile
      //- v-list-tile-avatar(tile @click="$emit('avatarClick')")
      //-   v-img(:src="`/img/${player.avatar}`")
      Avatar(v-model="avatar")
      v-list-tile-content(@click="$emit('click')")
        v-list-tile-title
          v-layout
            v-flex.text-truncate(xs6) {{ player.characterName }}
            v-flex(xs6) {{ player.klass }}{{ player.level }}
        v-list-tile-sub-title
          v-layout
            v-flex(xs8) {{ player.race }}/{{ player.background }}
            v-flex(xs4) PL:{{ player.name }}
      slot
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
