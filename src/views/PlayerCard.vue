<template lang="pug">
  v-card
    v-list(three-line)
      v-list-tile
        v-list-tile-avatar(tile)
          img(:src="avater")
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
        v-list-tile-content
          v-list-tile-title
            v-layout.center
              v-flex(xs5) 最大hp
          v-list-tile-sub-title
            v-layout.center
              v-flex(xs5) {{ player.hp }}
        v-layout.center(align-center justify-center)
          v-flex(xs4): v-btn(fab small dark color="grey" @click="decHp"): v-icon exposure_neg_1
          v-flex(xs4): h2 {{ hp }}
          v-flex(xs4): v-btn(fab small dark color="grey" @click="incHp"): v-icon exposure_plus_1
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
        v-list-tile-content
          v-list-tile-title メモ
          v-list-tile-sub-title {{ player.memo }}
      v-btn(absolute dark fab bottom right color="green" @click="edit")
        v-icon edit

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Player } from '@/models/Player';
import { ABILITY_LABEL } from '@/data/DATA';
import API from '@/api';
import { AVATER, WEAPON } from '@/data/DATA';
import { Weapon } from '@/models/Weapon';

@Component
export default class PlayerCard extends Vue {
  public player: Player = new Player({});
  private avater = require('@/assets/' + AVATER.sample());
  private abilityLabel = ABILITY_LABEL;
  private weapons: Array<Weapon | undefined> = [];
  private hp: number = 0;
  @Prop() private id!: string;

  private edit(): void {
    this.$router.push(`/playerForm/${this.player._id.$oid}`);
  }

  private incHp(): void {
    if (this.hp < (this.player.hp || 0)) {
      this.hp++;
    } else {
      alert('既に最大hpです');
    }
  }

  private decHp(): void {
    if (this.hp > 0) {
      this.hp--;
    } else {
      alert('hpはゼロ以下になりません');
    }
  }

  private created(): void {
    if (typeof this.$store.state.player === 'undefined') {
      API.get(this.id)
        .then((res) => {
          this.player = new Player(res.data);
          this.hp = this.player.hp || 0;
          this.weapons = this.player.weapon.map((w) => {
            return WEAPON.get(w);
          });
        })
        .catch((e) => alert(e));
    } else {
      this.player = this.$store.state.player.find((p: Player) => p._id.$oid === this.id);
    }
  }
}
</script>

<style lang="stylus" scoped>
  .center
    text-align center
</style>
