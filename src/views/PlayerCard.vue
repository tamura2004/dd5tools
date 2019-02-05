<template lang="pug">
  v-app
    v-toolbar(app)
      v-btn(icon to="/"): v-icon clear
      v-toolbar-title キャラクターシート
    v-content
      v-list(three-line)
        v-list-tile
          v-btn(fixed dark fab top right color="green" @click="edit")
            v-icon edit
          v-list-tile-avatar(tile)
            v-img(:src="require('@/assets/' + player.avatar)")
          v-list-tile-content
            v-list-tile-title
              v-layout
                v-flex(xs7) {{ player.characterName }}
                v-flex(xs5) {{ player.klass }}{{ player.level}}
            v-list-tile-sub-title
              v-layout
                v-flex(xs7) {{ player.race }}/{{ player.background }}
                v-flex(xs5) PL:{{ player.name }}
            v-list-tile-sub-title
              v-layout
                v-flex(xs7) {{ player.alignment }}
                v-flex(xs5) EXP:{{ player.exp }}
        v-divider
        v-list-tile
          v-list-tile-content
            v-list-tile-sub-title
              v-layout.center
                v-flex(xs2 v-for="(label, i) in abilityLabel" :key="'label' + i") {{ label }}
            v-list-tile-title
              v-layout.center
                v-flex(xs2 v-for="(a, i) in player.ability" :key="'ability' + i") {{ a }}
            v-list-tile-sub-title
              v-layout.center
                v-flex(xs2 v-for="(m, i) in player.abilityMod" :key="'mod' + i") ({{ m }})
        v-divider
        v-list-tile
          v-layout.center
            v-flex(xs2)
              v-list-tile-title.center 最大hp
              v-list-tile-sub-title {{ player.hp }}
            v-flex(xs10)
              v-list-tile-sub-title.caption.center 数字をタップで値を変更
              LifeCounter(v-model="hp" :maxHp="player.hp")

        v-divider
        v-list-tile
          v-list-tile-content
            v-list-tile-title
              v-layout
                v-flex.center(xs2) AC
                v-flex(xs8) {{ player.armor }}
            v-list-tile-sub-title
              v-layout
                v-flex.center(xs2) {{ player.ac }}
        template(v-for="(w, i) in weapons")
          v-divider
          v-list-tile
            v-list-tile-content
              v-list-tile-title {{ player.weapon[i] }}：{{ w.category }}
              v-list-tile-sub-title 攻撃+{{ player.toHit(w) }}、間合い{{ w.range }}、ヒット：{{ w.damage }}+{{ player.toHit(w) }}[{{ w.type }}]ダメージ
        v-divider
        v-list-tile
          v-btn(absolute dark fab top left small color="red" @click="edit")
            v-icon add
          v-list-tile-content
            v-list-tile-title メモ
            v-list-tile-sub-title {{ player.memo }}

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import LifeCounter from '@/components/LifeCounter.vue';
import IconSelect from '@/components/IconSelect.vue';
import { Player } from '@/models/Player';
import { ABILITY_LABEL } from '@/data/DATA';
import { WEAPON } from '@/data/DATA';
import { Weapon } from '@/models/Weapon';
import { db } from '@/plugins/firebase';

@Component({
  components: {
    LifeCounter,
    IconSelect,
  },
})
export default class PlayerCard extends Vue {
  public player: Player = new Player({});
  private abilityLabel = ABILITY_LABEL;
  private weapons: Array<Weapon | undefined> = [];
  private hp: number = 0;
  @Prop() private id!: string;

  private edit(): void {
    this.$router.push(`/playerForm/${this.player.id}`);
  }

  private created(): void {
    if (typeof this.$store.state.player === 'undefined') {
      db.collection('players').doc(this.id).get()
        .then((doc) => {
          this.player = new Player({
            id: doc.id,
            ...doc.data(),
          });
          this.hp = this.player.hp || 0;
          this.weapons = this.player.weapon.map((w) => {
            return WEAPON.get(w);
          });
        })
        .catch((e) => alert(e));
    } else {
      this.player = this.$store.state.player.find((p: Player) => p.id === this.id);
    }
  }
}
</script>

<style lang="stylus" scoped>
  .center
    text-align center
</style>
