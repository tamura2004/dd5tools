<template lang="pug">
  div
    MenuButton(to="/monsters" label="モンスター")
    MenuButton(to="/treasures" label="財宝")
    MenuButton(to="/dungeons" label="ダンジョン")
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
