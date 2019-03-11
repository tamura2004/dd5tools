<template lang="pug">
  .headline Sessions
    v-list
      v-list-tile(
        v-for="[key, session] in Array.from(sessions)"
        :key="key"
        :to="{ name: 'session', params: { sessionId: key }}"
      )
        v-list-tile-content
          v-list-tile-title {{ session.name }}
          v-list-tile-sub-title 報酬：{{ session.reward }}gp
        v-list-tile-action
          v-icon arrow_forward_ios
    v-btn(dark block color="primary" :to="{ name: 'sessions/new' }") 新規セッション
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';

@Component({
  computed: {
    ...mapState(['sessions']),
  },
})
export default class Sessions extends Vue {
}
</script>
