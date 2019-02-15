<template lang="pug">
  v-list(dense)
    v-list-tile
      v-list-tile-title {{ monster.name }}
    v-divider
    v-list-tile
      v-list-tile-sub-title {{ monster.size }}・{{ monster.type }}、{{ monster.alignment }}
    v-list-tile(v-for="i in monster.num" :key="i" dense)
      v-list-tile-content
        v-layout(row wrap)
          v-flex(xs4)
            v-list-tile-content
              v-list-tile-title
                v-layout.center No.{{i}}
          v-flex(xs8)
            LifeCounter(v-model="monster.currentHp[i-1]" :maxHp="monster.hp")
    v-divider
    v-list-tile
      v-list-tile-sub-title
        v-layout
          v-flex(xs3) AC: {{ monster.ac }}
          v-flex(xs3) {{ monster.hp }}
          v-flex(xs6) 脅威度: {{ monster.cr }} ({{ monster.exp }}exp)
        v-layout
          v-flex(xs12) 移動速度: {{ monster.mv }}
    v-divider
    v-list-tile
      v-list-tile-content
        v-list-tile-sub-title
          v-layout
            v-flex(xs2) 【筋】
            v-flex(xs2) 【敏】
            v-flex(xs2) 【耐】
            v-flex(xs2) 【知】
            v-flex(xs2) 【判】
            v-flex(xs2) 【魅】
        v-list-tile-title
          v-layout
            v-flex(xs2 v-for="i in 6" :key="i") {{ monster.abilityString(i - 1) }}

    v-divider
    v-list-tile(v-for="attribute in monster.attributes" :key="attribute")
      v-list-tile-sub-title {{ attribute }}

    v-divider
    div(v-for="action in monster.actions" :key="action")
      p.caption.mx-4 {{ action }}

    v-divider
    v-list-tile(v-for="special in monster.specials" :key="special")
      v-list-tile-sub-title {{ special }}
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';
  import { MONSTERS } from '@/data/MONSTERS';
  import { Monster } from '@/models/Monster';
  import LifeCounter from '@/components/LifeCounter.vue';
  import Floor from '@/models/Floor';

  @Component({
    components: {
      LifeCounter,
    },
  })
  export default class MonsterShow extends Vue {
    @Prop() private name!: string;
    @Prop() private id!: string;

    private get monster(): Monster | undefined {
      if (!!name) {
        const init = MONSTERS.find((m) => m.name === this.name);
        if (init !== undefined) {
          return new Monster(init, 1);
        }
      } else {
        const init: any = this.$store.state.floors[this.id].monster;
        return new Monster(init, init.num);
      }
    }
  }
</script>

<style lang="stylus">
  .center
    text-align center
</style>
