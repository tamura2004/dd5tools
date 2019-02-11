<template lang="pug">
  v-app
    v-toolbar(app flat dark dense)
      v-btn(icon @click="$router.go(-1)"): v-icon clear
      v-toolbar-title {{ player.characterName }}
      v-spacer
      v-btn(icon @click="edit"): v-icon edit
    v-content
      v-list(dense)
        v-list-tile
          v-list-tile-avatar(tile)
            v-img(:src="`/img/${player.avatar}`")
          v-list-tile-content
            v-list-tile-title
              v-layout
                v-flex(xs6) {{ player.klass }} {{ player.level}}レベル
                v-flex(xs6) {{ player.race }}/{{ player.background }}
            v-list-tile-sub-title
              v-layout
                v-flex(xs6) {{ player.alignment }}
                v-flex(xs3) PL:{{ player.name }}
                v-flex(xs3) EXP:{{ player.exp }}
        table.mb-1
          tr
            td.label AC
            td.number {{ player.ac }}
            td.label MV
            td.number 30'
            td.label hp
            td.number {{ player.hp }}
            td.label PB
            td.number +2
        table
          tr(v-for="n in 6")
            td.label {{ abilityLabel[n-1] }}
            td.number {{ player.ability[n] }}
    p {{ player.ability | json }}
    //- p {{ player.ability | json }}
            //- td.number {{ player.abilityMod[n-1] }}
            //- td.number 〇
            //- td.skill {{ skills[n-1].join('、') }}

        //- v-list-group
        //-   v-list-tile(slot="activator")
        //-     v-list-tile-content
        //-       v-list-tile-title 武器
        //-   template(v-for="(w, i) in weapons")
        //-     v-list-tile
        //-       v-list-tile-content
        //-         v-list-tile-title {{ player.weapon[i] }}：{{ w.category }}
        //-         v-list-tile-sub-title 攻撃+{{ player.toHit(w) }}、間合い{{ w.range }}、ヒット：{{ w.damage }}+{{ player.toHit(w) }}[{{ w.type }}]ダメージ
        //-       v-list-tile-action: v-icon keyboard_arrow_right
        //-     v-divider
        //- v-divider
        //- v-list-group
        //-   v-list-tile(slot="activator")
        //-     v-list-tile-content
        //-       v-list-tile-title 呪文
        //-   v-list-tile
        //-     v-list-tile-content
        //-       v-list-tile-title キュア・ウーンズ
        //-       v-list-tile-sub-title 1レベル
        //-     v-list-tile-action: v-icon keyboard_arrow_right
        //- v-divider
        //- v-list-group
        //-   v-list-tile(slot="activator")
        //-     v-list-tile-content
        //-       v-list-tile-title 特技・クラス能力
        //-   v-list-tile
        //-     v-list-tile-content
        //-       v-list-tile-title {{ player.memo }}
        //-     v-list-tile-action: v-icon keyboard_arrow_right
        //- v-divider

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import LifeCounter from '@/components/LifeCounter.vue';
import IconSelect from '@/components/IconSelect.vue';
import { Player } from '@/models/Player';
import { ABILITY_LABEL, WEAPON, SKILLS } from '@/data/DATA';
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
  private skills = SKILLS;
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
.border
  border 1px black solid

table
  width 100%
  border solid 1px grey
  border-collapse collapse

tr
  height 32px

td
  border solid 1px grey
  padding 0 2px

td.label
  text-align center
  width 48px
  background-color #212121 
  color white

td.number
  text-align center
  width 32px

.v-toolbar__content
  font-size 9px
  height 12px
</style>
