export default ({ store }) => {
  store.dispatch("monsters/listen")
  store.dispatch("weapons/listen")
}