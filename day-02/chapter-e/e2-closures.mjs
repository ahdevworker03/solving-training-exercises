// E2 — Each makeCounter call creates an independent count binding.
function makeCounter(start) {
  let count = start;
  return function () {
    count++;
    return count;
  };
}

const counter_1 = makeCounter(0);
const counter_2 = makeCounter(10);

console.log(counter_1());
console.log(counter_1());
console.log(counter_2());
console.log(counter_1());
