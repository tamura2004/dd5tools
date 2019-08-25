export default ({ store }) => {
  store.dispatch("players/listen");
  store.dispatch("guilds/listen");
};
