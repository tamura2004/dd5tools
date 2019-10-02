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
      ? v
          .toString()
          .replace(/[0-9]/g, d => String.fromCharCode(d.charCodeAt(0) + 0xfee0))
      : "----";

  const label = v => {
    const index = v.replace("：", ":").indexOf(":");
    return index > 0 ? v.slice(0, index) : null;
  };

  const text = v => {
    const index = v.replace("：", ":").indexOf(":");
    return index > 0 ? v.replace(/フィート/g, "'").slice(index + 1) : v;
  };

  const action = v => {
    const atk = v.match(/攻撃[+＋][0-9０-９]+/);
    const hit = v.match(/ヒット[:：][0-9０-９]+/);
    if (Array.isArray(atk) && Array.isArray(hit)) {
      return `${atk[0]}、${hit[0]}`;
    } else {
      return "----";
    }
  };

  Vue.filter("name", show("name"));
  Vue.filter("player", player);
  Vue.filter("guild", guild);
  Vue.filter("level", level);
  Vue.filter("cr", cr);
  Vue.filter("num", num);
  Vue.filter("label", label);
  Vue.filter("text", text);
  Vue.filter("action", action);
}
