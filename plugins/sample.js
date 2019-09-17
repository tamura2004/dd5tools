export default ({ store }, inject) => {
  inject("sample", name => {
    const base = store.getters[`${name}/collection`];
    const first = base && base[0];
    if (!base || !first) {
      return null;
    }

    if (first.hasOwnProperty("total") && first.hasOwnProperty("dice")) {
      const collection = Object.assign([], base).sort(
        (a, b) => a.dice - b.dice,
      );
      const dice = Math.floor(Math.random() * first.total);
      return collection.find(v => dice < v.dice);
    } else {
      const index = Math.floor(Math.random() * base.size);
      return base[index];
    }
  });
};
