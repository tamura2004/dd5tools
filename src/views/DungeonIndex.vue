<template lang="pug">
  .headline ダンジョン一覧
    v-list(two-line)
      template(v-for="[key, dungeon] in Array.from(dungeons)")
        dungeon-tile(:dungeonId="key" :key="key")
        v-divider

    v-btn(dark block color="primary" to="/dungeons/new") 新規ダンジョン
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';

@Component({
  computed: {
    ...mapState(['dungeons']),
  },
})
export default class DungeonIndex extends Vue {
}
</script>
