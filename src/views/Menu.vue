<template lang="pug">
  div
    MenuButton(to="/dungeons" label="ダンジョン")
    MenuButton(to="/monsters" label="モンスター")
    MenuButton(to="/treasures" label="財宝")
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
