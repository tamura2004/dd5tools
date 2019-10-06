export default () => (n, m, a) => {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += Math.floor(Math.random() * m + 1);
  }
  return Math.floor(sum + a);
};
