import MONSTER_DATA from "~/assets/data/monsters";

export default ({ store }) => {
  store.dispatch("players/listen");
  store.dispatch("guilds/listen");

  // for (const monster of MONSTER_DATA) {
  //   store.dispatch("monsters/add", monster);
  // }

  store.dispatch("monsters/load");
};
