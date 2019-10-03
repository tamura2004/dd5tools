<template lang="pug">
  v-layout.pa-4(justify-start align-center column)
    .headline.my-4
      | {{ $encounter.place | name }}
    .headline.my-4
      | {{ $encounter.event | name }}
    .headline.my-4
      | {{ $encounter.boss | name }} / {{ $encounter.boss.exp}}
    .headline.my-4
      | {{ $encounter.zako | name }} * {{ $encounter.num }} / {{ $encounter.zako.exp }}
    dd-menu-button(@click="roll" color="success") 振り直す
    dd-menu-button(@click="save" color="primary") 決定
</template>

<script>
import PLACE_DATA from "~/assets/data/places";

const roll = ({ $sample, $lookup, $encounter, $party }) => {
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
  async fetch({ store, app, redirect }) {
    if (!app.$party.num) {
      redirect("/party/edit");
      return;
    }
    app.$nav.title = "遭遇";
    const data = await store.dispatch("values/findOne", "encounter");
    console.log(data);
    if (data) {
      app.$encounter.data = data;
    } else {
      console.log("goto roll");
      roll(app);
    }
  },
  methods: {
    roll() {
      roll(this);
    },
    save() {
      this.$write("values", "encounter", this.$encounter.data);
      this.$router.push("/encounters/monsters");
    },
  },
};
</script>
