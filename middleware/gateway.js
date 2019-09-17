import PLACE_DATA from "~/assets/data/places";

export default ({ store }) => {
  store.dispatch("monsters/listen");
  store.dispatch("weapons/listen");
  store.dispatch("places/init", PLACE_DATA);
  store.dispatch("players/listen")
  store.dispatch("guilds/listen")
};
