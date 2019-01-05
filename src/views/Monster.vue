<template lang="pug">
  v-card
    v-toolbar(color="primary" dark)
      v-icon(@click="back") arrow_back
      v-toolbar-title {{ monster.name }}
    v-card-title.pa-2
      h5 {{ monster.size }}・{{ monster.type }}、{{ monster.alignment }}
    v-divider
    v-list(three-line)
      v-list-tile
        v-list-tile-action
          v-icon face
        v-list-tile-content
          v-list-tile-title AC: {{ monster.ac }}
          v-list-tile-title hp: {{ monster.hp }}
          v-list-tile-title 移動速度: {{ monster.mv }}
          v-list-tile-title 脅威度: {{ monster.exp }}exp
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
    v-list(three-line)
      v-list-tile
        v-list-tile-action
          v-icon router
        v-list-tile-content
          v-list-tile-title(v-for="(attribute, i) in monster.attributes" :key="i") {{ attribute }}
    v-divider
    h3.mx-3 アクション
    v-list(three-line v-for="(action, i) in monster.actions" :key="i")
      v-list-tile
        v-list-tile-action
          v-icon colorize
        v-card-text {{ action }}
    v-divider
    h3.mx-3 特殊能力
    v-list(three-line v-for="(special, i) in monster.specials" :key="i")
      v-list-tile
        v-list-tile-action
          v-icon gavel
        v-card-text {{ special }}
    v-divider
    v-card-actions
      v-spacer
      v-btn(color="primary" @click="back") 戻る
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';

  @Component
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
