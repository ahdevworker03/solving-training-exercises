// D2 — The original block-body arrow omitted return:
// const double = (number) => { number * 2; };

const doubleExplicit = (number) => {
  return number * 2;
};
const doubleImplicit = (number) => number * 2;

console.log(doubleExplicit(5));
console.log(doubleImplicit(5));
