<template lang="pug">
  div
    v-toolbar(app)
      //- v-toolbar-side-icon
      v-icon home
      v-toolbar-title.headline
        span D&D5eツール
      v-spacer
    v-content
      v-container(fluid fill-height)
        v-layout(align-center justify-center)
          v-flex(xs8 sm6 md4 lg3 xl2)
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
