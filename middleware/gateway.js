import PLACE_DATA from "~/assets/data/places";
import WEAPON_DATA from "~/assets/data/weapons";

export default ({ store }) => {
  // store.dispatch("monsters/listen");
  // store.dispatch("places/init", PLACE_DATA);
  store.dispatch("weapons/init", WEAPON_DATA);
  // store.dispatch("players/listen")
  // store.dispatch("guilds/listen")
};
