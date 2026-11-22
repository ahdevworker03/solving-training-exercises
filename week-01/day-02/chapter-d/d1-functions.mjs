// D1 — Function declaration, arrow function, and default parameters.
// Both implementations use distinct names to execute together.
function totalCents(priceCents, quantity = 1) {
  return priceCents * quantity;
}

const totalCentsArrow = (priceCents, quantity = 1) => priceCents * quantity;

console.log(totalCents(200, 3));
console.log(totalCents(200));
console.log(totalCentsArrow(200, 3));
console.log(totalCentsArrow(200));
