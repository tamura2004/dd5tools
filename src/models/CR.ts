interface CR {
  id: number;
  cr: string;
  exp: number;
}

const EXPS: CR[] = [
  { id: 7, cr: '4', exp: 1100 },
  { id: 6, cr: '3', exp: 700 },
  { id: 5, cr: '2', exp: 450 },
  { id: 4, cr: '1', exp: 200 },
  { id: 3, cr: '1/2', exp: 100 },
  { id: 2, cr: '1/4', exp: 50 },
  { id: 1, cr: '1/8', exp: 25 },
  { id: 0, cr: '0', exp: 0 },
];

function findExp(exp: number): number {
  const ret = EXPS.find((e) => e.exp <= exp);
  if (ret === undefined) {
    throw new Error(`bad CR key: ${exp}`);
  }
  return ret.exp;
}

export default findExp;
