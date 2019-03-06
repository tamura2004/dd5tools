<template lang="pug">
v-container(fluid)
  v-layout(justify-center row wrap)
    v-flex(xs12)
      MenuButton(
        label="クエスト失敗！"
        color="warning"
        to="../quests"
      )
    v-flex(xs12)
      .headline 違約金20,000gpを支払った
    v-flex(xs12)
      .headline 冒険者ランクがEに下がった
    v-flex(xs12)
      MenuButton(
        label="OK"
        to="../rank"
      )
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import MenuButton from '@/components/MenuButton.vue';

@Component({
  components: {
    MenuButton,
  },
})
export default class GuildPlayerQuestSuccess extends Vue {
  @Prop() private questId!: string;
}
</script>

<style lang="stylus" scoped>
</style>
