<template lang="pug">
    MenuButton(label="クエスト" color="primary" to="quests")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MenuButton from '@/components/MenuButton.vue';

@Component({
  components: {
    MenuButton,
  },
})
export default class GuildPlayerMenu extends Vue {
}
</script>
