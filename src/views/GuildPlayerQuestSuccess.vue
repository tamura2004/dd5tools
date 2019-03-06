<template lang="pug">
v-container(fluid)
  v-layout(justify-center row wrap)
    v-flex(xs12)
      MenuButton(
        label="クエスト成功！"
        color="primary"
        to="../quests"
      )
    v-flex(xs12)
      .headline 報奨金20,000gpを受け取った
    v-flex(xs12)
      .headline 冒険者ランクがCに上がった
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
    }
  })
  export default class GuildPlayerQuestSuccess extends Vue {
    @Prop() private questId!: string;
  }
</script>

<style lang="stylus" scoped>
</style>
