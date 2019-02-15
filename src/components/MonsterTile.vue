<template lang="pug">
  v-list-tile
    v-list-tile-avatar
      slot(name="avatar")
    v-list-tile-content(@click="$emit('click', name)")
      v-list-tile-title
        v-layout
          v-flex(xs12) {{ monster.name }}
      v-list-tile-sub-title
        v-layout
          v-flex(xs3) {{ monster.num }} 体
          v-flex(xs3) AC: {{ monster.ac }}
          v-flex(xs3) hp: {{ monster.hp }}
          v-flex(xs3) exp:{{ monster.exp * monster.num }}
    v-list-tile-action
      slot(name="action")

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Monster } from '@/models/Monster';

@Component
export default class MonsterTile extends Vue {
  @Prop() private monster!: Monster;
}
</script>

<style lang="stylus">
</style>
