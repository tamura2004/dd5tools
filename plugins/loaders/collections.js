export default ({ store }) => {
  store.dispatch("encounters/read");
  store.dispatch("environments/read");
  store.dispatch("monsters/read");
};
