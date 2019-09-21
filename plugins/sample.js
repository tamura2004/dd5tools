export default ({ store }, inject) => {
  inject("sample", name => {
    const base = store.getters[`${name}/collection`];
    const first = base && base[0];
    if (!base || !first) {
      return null;
    }

    if (first.hasOwnProperty("weight")) {
      const total = base.reduce((a, v) => (a += v.weight), 0);
      let dice = Math.floor(Math.random() * total);
      for (const v of base) {
        dice -= v.weight;
        if (dice < 0) {
          return v;
        }
      }
    } else {
      const index = Math.floor(Math.random() * base.size);
      return base[index];
    }
  });
};
