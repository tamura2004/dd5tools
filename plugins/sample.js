const roll = n => Math.floor(Math.random() * n);

export default ({ app }, inject) => {
  inject("sample", (name, option) => {
    const base = app.$read(name, option);
    if (typeof base === "undefined" || base.length === 0) {
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
    } else {
      return base[roll(base.length)];
    }
  });
};
