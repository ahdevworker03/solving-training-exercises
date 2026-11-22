// F4 — Bracket notation and rest parameters with reduce.
const product = { name: "Pen", priceCents: 100 };
const key = "priceCents";

console.log(product[key]); // 100
console.log(product.key); // undefined: no literal "key" property

function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(10, 20)); // 30
console.log(sum()); // 0
