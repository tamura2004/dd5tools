<template lang="pug">
  .headline(v-if="guild(guildId)")
    table
      tr
        th.label.body-2 ギルド
        td.body-2 {{ guild(guildId).name }}
      tr
        th.label.body-2 説明
        td.body-2 {{ guild(guildId).description }}
      tr
        th.label.body-2 経験値
        td.body-2 {{ guild(guildId).exp }}
    v-tabs
      v-tab(to="players") 冒険者
      v-tab(:to="`/guild/${guildId}/edit`") 編集
    router-view

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { mapState, mapGetters } from 'vuex';
import Guild from '@/models/Guild';

@Component({
  computed: {
    ...mapGetters(['guild']),
  },
})
export default class GuildShow extends Vue {
  @Prop() private guildId!: string;
}
</script>

<style lang="stylus">
th.label
  text-align center
  width 48px
  background-color #212121
  color white
  width 15%
td.body-2
  line-height 24px
</style>
