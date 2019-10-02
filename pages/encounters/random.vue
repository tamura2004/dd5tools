<template lang="pug">
  v-layout.pa-4(justify-start align-center column)
    .headline.my-4
      | {{ $encounter.place | name }}
    .headline.my-4
      | {{ $encounter.event | name }}
    nuxt-link.headline.my-4(:to="`/monsters/${$encounter.boss.id}`")
      | {{ $encounter.boss | name }} / {{ $encounter.boss.exp}}
    nuxt-link.headline.my-4(:to="`/monsters/${$encounter.zako.id}`")
      | {{ $encounter.zako | name }} * {{ $encounter.num }} / {{ $encounter.zako.exp }}
    dd-menu-button(@click="roll" color="success") 振り直す
    dd-menu-button(@click="save" color="primary") 決定
</template>

<script>
import PLACE_DATA from "~/assets/data/places";

const roll = ({ $sample, $lookup, $encounter, $party }) => {
  debugger
  const event = $sample("encounter/event");
  const place = $sample("places");

  let total = $party.hard / 2;
  let exp = $lookup("monster/cr", v => v.exp < total, "exp");
  const boss = $sample("monsters", { exp });

  if (!boss) {
    alert("null boss");
    return;
  }

  total -= boss.exp;
  exp = $lookup("monster/cr", v => v.exp <= total / 3, "exp");
  const zako = $sample("monsters", { exp });
  if (!zako) {
    alert("null zako");
    return;
  }
  const num = Math.floor(total / zako.exp);
  $encounter.data = { place, event, boss, zako, num };
};

export default {
  async fetch({ store, app }) {
    app.$nav.title = "遭遇";
    const data = await store.dispatch("values/findOne", "encounter");
    if (data) {
      app.$encounter.data = data;
    } else {
      roll(app);
    }
  },
  methods: {
    roll() {
      roll(this)
    },
    save() {
      this.$write("values", "encounter", this.$encounter.data);
    },
  },
};
</script>

<style lang="stylus" scoped>
#img {
  width: 320px;
}
</style>
