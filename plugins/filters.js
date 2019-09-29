import Vue from "vue";
import { toLevel } from "~/assets/data/exp";
import { expToCR } from "~/assets/data/cr";

export default function({ store }) {
  const show = key => v => (v && v[key] ? v[key] : "----");
  const player = id => store.getters["players/player"](id);
  const guild = player =>
    player.guildId && store.getters["guilds/guild"](player.guildId);
  const level = guild => guild && guild.exp && toLevel(guild.exp);
  const cr = monster => monster && monster.exp && expToCR(monster.exp);
  const num = v =>
    v
      ? v.toString().replace(/[0-9]/g, d => String.fromCharCode(d.charCodeAt(0) + 0xfee0))
      : "----";

  Vue.filter("name", show("name"));
  Vue.filter("player", player);
  Vue.filter("guild", guild);
  Vue.filter("level", level);
  Vue.filter("cr", cr);
  Vue.filter("num", num);
}
