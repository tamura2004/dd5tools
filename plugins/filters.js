import Vue from "vue";
import { toLevel } from "~/assets/ts/data/exp";

import {
  Stitch,
  RemoteMongoClient,
  AnonymousCredential,
} from "mongodb-stitch-browser-sdk";

const client = Stitch.initializeDefaultAppClient("dd5tools-cpjnu");
const db = client
  .getServiceClient(RemoteMongoClient.factory, "mongodb-atlas")
  .db("test");

client.auth
  .loginWithCredential(new AnonymousCredential())
  .then(user =>
    db.collection("monsters").insertOne({
      name: 'アース・エレメンタル',
      size: '大型',
      type: 'エレメンタル',
      alignment: '真なる中立',
      ac: 17,
      maxHp: 126,
      mv: '30フィート、穴掘り30フィート',
      ability: [
        20,
        8,
        20,
        5,
        10,
        5,
      ],
      exp: 1800,
      attributes: [
        'ダメージ脆弱性：［雷鳴］',
        'ダメージ抵抗：非魔法的な武器による［殴打］、［斬撃］、［刺突］',
        'ダメージ完全耐性：［毒］',
        '状態完全耐性：気絶状態、消耗状態、石化状態、毒状態、麻痺状態',
        '感覚：暗視60フィート、振動感知60フィート、受動〈知覚〉10',
        '言語：地界語',
      ],
      actions: [
        '叩きつけ：近接武器攻撃：攻撃＋8、間合い10フィート、目標1つ。ヒット：14（2d8＋5）［殴打］ダメージ。',
      ],
      specials: [
        '地潜り：このエレメンタルは非魔法的な未加工の土や石のなかを穴掘りによって移動でき、しかもその土や石に何の影響も及ぼさない。',
        '攻城モンスター：このエレメンタルは物体ならびに構造物に対しては2倍のダメージを与える。',
        '複数回攻撃：2回の“叩きつけ”攻撃を行なう。',
        'アース・エレメンタル（地の元素精霊）が足取り重く進むさまは、まるで丘が歩いているかのよう、両脇で振っているごつごつした石の腕は棍棒のようである。泥と石でできた頭や胴体のそこかしこに、金属や宝石や明るい色の鉱物の塊がはまっている。',
      ],
    }),
  )
  .then(() =>
    db
      .collection("monsters")
      .find({}, { limit: 100 })
      .asArray(),
  )
  .then(docs => {
    console.log("Found docs", docs);
    console.log("[MongoDB Stitch] Connected to Stitch");
  })
  .catch(err => {
    console.error(err);
  });

export default function({ store }) {
  const player = id => store.getters["players/player"](id);
  const guild = player =>
    player.guildId && store.getters["guilds/guild"](player.guildId);
  const level = guild => guild && guild.exp && toLevel(guild.exp);

  Vue.filter("player", player);
  Vue.filter("guild", guild);
  Vue.filter("level", level);
}
