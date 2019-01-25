<template lang="pug">
  v-card
    v-toolbar(color="primary" dark)
      v-toolbar-title {{ monster.name }}
    v-card-title.pa-2
      h2 {{ monster.size }}・{{ monster.type }}、{{ monster.alignment }}
    v-divider
    v-list(three-line)
      v-list-tile
        v-list-tile-action
          v-icon face
        v-list-tile-content
          v-list-tile-title AC: {{ monster.ac }}
          v-list-tile-title hp: {{ monster.hp }}
          v-list-tile-title 移動速度: {{ monster.mv }}
          v-list-tile-title 脅威度: {{ monster.cr }} ({{ monster.exp }}exp)
    v-divider
    v-list.my-1
      v-list-tile
        v-list-tile-action
          v-icon build
        v-list-tile-content
          v-list-tile-title
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
    v-list(three-line v-if="monster.attributes.length <= 4")
      v-list-tile
        v-list-tile-action
          v-icon router
        v-list-tile-content
          v-list-tile-title(v-for="attribute in monster.attributes" :key="attribute") {{ attribute }}

    div(v-else)
      v-card-title.pa-2
        h2 特徴
      v-card-text.subheading.py-0(v-for="attribute in monster.attributes" :key="attribute") {{ attribute }}

    v-divider
    v-card-title.pa-2
      h2 アクション
    v-card-text.subheading(v-for="action in monster.actions" :key="action") {{ action }}

    v-divider
    v-card-title.pa-2
      h2 特殊能力
    v-card-text.subheading(v-for="special in monster.specials" :key="special") {{ special }}

    v-divider
    v-card-actions
      v-spacer
      v-btn(color="primary" @click="back") 戻る
    v-divider
    v-list(v-for="i in monster.num" :key="i")
      v-list-tile
        v-list-tile-content
          v-list-tile-title
            v-layout.center No.{{i}}
        LifeCounter(:hp="monster.hp" :maxHp="monster.hp")
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';
  import LifeCounter from '@/components/LifeCounter.vue';

  @Component({
    components: {
      LifeCounter,
    },
  })
  export default class Monster extends Vue {
    @Prop() private num!: number;
    private back(): void {
      this.$router.push('/monsters');
    }
    private get monster(): Monster {
      return this.$store.state.monsters[this.num - 1];
    }
  }
</script>

<style lang="stylus">
</style>
