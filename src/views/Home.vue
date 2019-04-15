<template lang="pug">
  v-container(fluid)
    v-layout(row wrap justify-center)
      v-flex(xs12): .display-3.text-xs-center トワイライト
      v-flex(xs12): .display-3.text-xs-center D&D5版
      v-flex(xs12): .display-3.text-xs-center キャンペーン
      v-flex(xs12)
        .display-1.text-xs-center  あなたは・・・
    menu-button.my-4(label="冒険者" color="primary" to="/menu/guild")
    menu-button(label="マスター" color="grey darken-4" to="/menu/master")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MenuButton from '@/components/MenuButton.vue';

@Component
export default class MenuTop extends Vue {
}
</script>
