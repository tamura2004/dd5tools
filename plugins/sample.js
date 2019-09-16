export default ({ store }, inject) => {
  inject("sample", name => {
    const base = store.getters[`${name}/collection`];
    const first = base && base[0];
    if (!base || !first) {
      return null;
    }

    if (first.hasOwnProperty("total") && first.hasOwnProperty("dice")) {
      const dice = Math.floor(Math.random() * first.total);
      return base.find(v => dice < v.dice);
    }

    const index = Math.floor(Math.random() * base.size);
    return base[index];
  });
};
