export default ({ store }) => {
  store.dispatch("monsters/listen")
  store.dispatch("weapons/listen")
  store.dispatch("players/listen")
  store.dispatch("guilds/listen")
}