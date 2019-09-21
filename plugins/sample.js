const roll = n => Math.floor(Math.random() * n);

export default ({ store, app }, inject) => {
  inject("sample", name => {
    // const base = store.getters[`${name}/collection`];
    const base = app.$read(name);
    if (typeof base === "undefined") {
      return null;
    }

    const last = base[base.length - 1];

    if (last.hasOwnProperty("weight")) {
      const total = base.reduce((a, v) => (a += v.weight), 0);
      let dice = roll(total);
      for (const v of base) {
        dice -= v.weight;
        if (dice < 0) {
          return v;
        }
      }
    } else if (last.hasOwnProperty("dice")) {
      const dice = roll(last.dice);
      for (const v of base) {
        if (dice < v.dice) {
          return v;
        }
      }
    } else if (typeof last === "string") {
      return {
        name: base[roll(base.length)],
      };
    }
  });
};
