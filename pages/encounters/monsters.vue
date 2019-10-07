<template lang="pug">
div
  v-row(v-if="$vuetify.breakpoint.smAndUp")
    v-col
      dd-monster-card(:monster="$encounter.boss" :title="true")
    v-col
      dd-monster-card(:monster="$encounter.zako" :title="true")
    v-col
      .overline.font-weight-black アドベンチャー
      v-card
        dd-memo(label="依頼人" :memo="$adventure.client")
        dd-memo(label="協力者" :memo="$adventure.friend")
        dd-memo(label="導入" :memo="$adventure.intro")
        dd-memo(label="目的" :memo="$adventure.purpose")
        dd-memo(label="悪漢" :memo="$adventure.villain")
        dd-memo(label="ボス" :memo="$adventure.monster")
        dd-memo(label="決戦" :memo="$adventure.climax")
      .overline.font-weight-black 環境
      v-card
        dd-memo(label="場所" :memo="$environment.place")
        dd-memo(label="移動手段" :memo="$environment.vehicle")
        dd-memo(label="要求技能" :memo="$environment.skill")
      .overline.font-weight-black 遭遇
      v-card
        dd-memo(label="ボス" :memo="$encounter.boss")
        dd-memo(:label="`雑魚x${$encounter.num}`" :memo="$encounter.zako")
        dd-memo(label="難易度" :memo="{ name: $encounter.mode.kanji }")
        dd-memo(label="exp" :memo="{ name: $encounter.exp }")
        dd-memo(label="報酬" :memo="$encounter.prise")
  v-tabs(v-if="$vuetify.breakpoint.xsOnly" v-model="tab" dark)
    v-tab {{ $encounter.boss | name }}
    v-tab {{ $encounter.zako | name }}
    v-tab 冒険
  v-tabs-items(v-if="$vuetify.breakpoint.xsOnly" v-model="tab")
    v-tab-item
      dd-monster-card(:monster="$encounter.boss")
    v-tab-item
      dd-monster-card(:monster="$encounter.zako")
    v-tab-item
      .overline.font-weight-black アドベンチャー
      v-card
        dd-memo(label="依頼人" :memo="$adventure.client")
        dd-memo(label="協力者" :memo="$adventure.friend")
        dd-memo(label="導入" :memo="$adventure.intro")
        dd-memo(label="目的" :memo="$adventure.purpose")
        dd-memo(label="悪漢" :memo="$adventure.villain")
        dd-memo(label="ボス" :memo="$adventure.monster")
        dd-memo(label="決戦" :memo="$adventure.climax")
      .overline.font-weight-black 環境
      v-card
        dd-memo(label="場所" :memo="$environment.place")
        dd-memo(label="移動手段" :memo="$environment.vehicle")
        dd-memo(label="要求技能" :memo="$environment.skill")
      .overline.font-weight-black 遭遇
      v-card
        dd-memo(label="ボス" :memo="$encounter.boss")
        dd-memo(:label="`雑魚x${$encounter.num}`" :memo="$encounter.zako")
        dd-memo(label="難易度" :memo="{ name: $encounter.mode.kanji }")
        dd-memo(label="exp" :memo="{ name: $encounter.exp }")
        dd-memo(label="報酬" :memo="$encounter.prise")
  dd-menu-button(to="/environments/random" color="primary") 次の遭遇へ
  dd-menu-button(:to="`/monsters/${$adventure.monster.id}`" color="error") ボス戦へ
  dd-menu-button(to="/adventures" color="primary") アドベンチャーホームへ

</template>

<script>
export default {
  layout: "no-app-bar",
  data() {
    return { tab: null };
  },
};
</script>