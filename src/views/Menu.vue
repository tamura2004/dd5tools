<template lang="pug">
  div
    MenuButton(to="/players" label="キャラシー")
    MenuButton(to="/games" label="セッション")
    MenuButton(to="/monsters" label="モンスター")
    MenuButton(to="/treasures" label="財宝")
    MenuButton(to="/dungeons" label="ダンジョン")
    MenuButton(to="/parties" label="パーティー")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MenuButton from '@/components/MenuButton.vue';

@Component({
  components: {
    MenuButton,
  },
})
export default class Menu extends Vue {
}
</script>
