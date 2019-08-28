import Vue from "vue";
import { toLevel } from "~/assets/data/exp";
import { expToCR } from "~/assets/data/cr";

export default function({ store }) {
  const player = id => store.getters["players/player"](id);
  const guild = player =>
    player.guildId && store.getters["guilds/guild"](player.guildId);
  const level = guild => guild && guild.exp && toLevel(guild.exp);
  const cr = monster => monster && monster.exp && expToCR(monster.exp);

  Vue.filter("player", player);
  Vue.filter("guild", guild);
  Vue.filter("level", level);
  Vue.filter("cr", cr);
}
