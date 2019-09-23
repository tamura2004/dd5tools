<template lang="pug">
  v-layout.pa-4(justify-start align-center column)
    .display-1.my-4
      | 次の冒険の舞台は「{{ $session.place | name }}」だ。
    .display-1.my-4
      | {{ $session.client | name }}の依頼により、
      | {{ $session.friend | name }}の助力を受けた冒険者一行。
    .display-1.my-4
      | {{ $session.intro | name }}
      | {{ $session.monster | name }}、
      | {{ $session.villain | name }}を相手取り、
      | {{ $session.purpose | name }}！
    .display-1.my-4
      | {{ $session.climax | name }}
    dd-menu-button(@click="roll" color="success") 振り直す
    dd-menu-button(@click="save" color="primary") 決定
</template>

<script>
import PLACE_DATA from "~/assets/data/places";

export default {
  data() {
    return {
      place: null,
    };
  },
  created() {
    this.$nav.title = "アドベンチャー";
    // const session = this.$read("values", "session");
    // console.log(session)
    // if (session) {
    //   this.$session.data = session;
    // this.$session.place = session.place;
    // this.$session.client = session.client;
    // this.$session.friend = session.friend;
    // this.$session.purpose = session.purpose;
    // this.$session.villain = session.villain;
    // this.$session.monster = session.monster;
    // this.$session.intro = session.intro;
    // this.$session.climax = session.climax;
    // } else {
    this.roll();
    // }
  },
  methods: {
    roll() {
      this.$session.place = this.$sample("places");
      this.$session.client = this.$sample("adventure/client");
      this.$session.friend = this.$sample("adventure/friend");
      this.$session.purpose = this.$sample("adventure/purpose");
      this.$session.villain = this.$sample("adventure/villain");
      this.$session.monster = this.$sample("monsters", {
        type: this.$session.villain.type,
      });
      this.$session.intro = this.$sample("adventure/intro");
      this.$session.climax = this.$sample("adventure/climax");
    },
    save() {
      this.$write("values", {
        ...this.$read("session", "data"),
        id: "session",
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
#img {
  width: 320px;
}
</style>
