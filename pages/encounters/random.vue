<template lang="pug">
  v-layout.pa-4(justify-start align-center column)
    .headline.my-4
      | {{ $session.place | name }}
    .headline.my-4
      | {{ $session.event | name }}
    span(v-if="boss")
      nuxt-link.headline.my-4(:to="`/monsters/${boss.id}`")
        | {{ boss | name }} / {{ boss.exp}}
    span(v-if="zako")
      nuxt-link.headline.my-4(:to="`/monsters/${zako.id}`")
        | {{ zako | name }} * {{ num }} / {{ zako.exp }}
    dd-menu-button(@click="roll" color="success") 振り直す
    dd-menu-button(@click="save" color="primary") 決定
</template>

<script>
import PLACE_DATA from "~/assets/data/places";

export default {
  async asyncData({ store, app }) {
    app.$session.data = await store.dispatch("values/findOne", "session");
    app.$nav.title = "遭遇";
  },
  data() {
    return {
      boss: null,
      zako: null,
      num: null,
    };
  },
  methods: {
    roll() {
      this.$session.event = this.$sample("encounter/event");
      this.$session.place = this.$sample("places");
      let total = this.$party.hard / 2;
      let exp = this.$lookup("monster/cr", v => v.exp < total, "exp");
      this.boss = this.$sample("monsters", { exp });
      if (this.boss === null) {
        alert("null boss");
        return;
      }
      total -= this.boss.exp;
      exp = this.$lookup("monster/cr", v => v.exp < total / 3, "exp");
      this.zako = this.$sample("monsters", { exp });
      if (this.zako === null) {
        alert("null zako");
        return;
      }
      this.num = Math.floor(total / this.zako.exp);
    },
    save() {
      this.$write("values", "session", this.$session.data);
    },
  },
};
</script>

<style lang="stylus" scoped>
#img {
  width: 320px;
}
</style>
