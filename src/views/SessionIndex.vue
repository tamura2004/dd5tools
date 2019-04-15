<template lang="pug">
  .headline セッション一覧
    v-list(two-line)
      template(v-for="[key, session] in Array.from(sessions)")
        session-tile(:sessionId="key" :key="key")
        v-divider

    v-btn(dark block color="primary" to="/sessions/new") 新規セッション
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';

@Component({
  computed: {
    ...mapState(['sessions']),
  },
})
export default class SessionIndex extends Vue {
}
</script>
