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
    db
      .collection("monsters")
      .updateOne(
        { owner_id: client.auth.user.id },
        { $set: { number: 42 } },
        { upsert: true },
      ),
  )
  .then(() =>
    db
      .collection("monsters")
      .find({ owner_id: client.auth.user.id }, { limit: 100 })
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
