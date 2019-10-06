export default ({ app }) => (name, option, member) => {
  const base = app.$read(name, option);
  if (typeof base === "undefined") {
    return null;
  }

  const last = base[base.length - 1];
  if (typeof member === "undefined") {
    return last;
  } else if (typeof last === "undefined") {
    return null;
  } else {
    return last[member];
  }
};
