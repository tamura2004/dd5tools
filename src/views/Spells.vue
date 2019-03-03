<template lang="pug">
  v-app
    v-toolbar(flat dark app dense)
      v-btn(icon @click="$router.go(-1)"): v-icon arrow_back_ios
      v-toolbar-title.text-xs-center 呪文
      v-spacer
      v-btn(icon to="/spellForm/new"): v-icon add
    v-content
      v-list
        template(v-for="(spell, key) in spells")
          v-list-tile
            v-list-tile-action(
              v-if="currentPlayerId"
              @click="addSpell(key)"
            )
              v-icon add
            v-list-tile-content
              v-list-tile-title {{ spell.name }}
              v-list-tile-sub-title {{ spell.klass }}/{{ spell.level }}lv
            v-list-tile-action(@click="$router.push(`/spellForm/${key}`)"): v-icon edit
          v-divider
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Spell from '@/models/Spell';

  @Component
  export default class Spells extends Vue {
    private get spells(): { [key: string]: Spell } {
      return this.$store.state.spells;
    }
    private get currentPlayerId(): string {
      return this.$store.state.current.playerId;
    }
    private addSpell(key: string): void {
      this.$store.dispatch('addSpell', key);
      this.$router.go(-1);
    }
  }
</script>

<style lang="stylus" scoped>
</style>
