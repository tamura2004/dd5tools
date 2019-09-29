export default ({ app }, inject) => {
  inject("lookup", (name, option, member) => {
    const base = app.$read(name, option);
    if (typeof base === "undefined") {
      return undefined;
    }

    const last = base[base.length - 1];
    if (typeof member === "undefind") {
      return last;
    } else {
      return last[member];
    }
  });
};
