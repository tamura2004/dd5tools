const init = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => ({
  text: `CR${i}`,
  value: `${i}`,
}));
const all = { text: "ALL", value: null };

export const items = [all, ...init];
