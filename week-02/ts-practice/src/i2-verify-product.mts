import { parseProduct } from "./i1-parse-product.mjs";

// Expected outcomes in the same order as the ten learner test cases.
const testInputs: { label: string; value: unknown; expected: unknown }[] = [
  { label: "valid", value: { id: 23, name: "Laptop", priceCents: 50000 }, expected: { id: 23, name: "Laptop", priceCents: 50000 } },
  { label: "null", value: null, expected: "Product must be an object" },
  { label: "missing ID", value: { name: "Laptop", priceCents: 50000 }, expected: "Product ID must be a positive integer" },
  { label: "text ID", value: { id: "123", name: "Laptop", priceCents: 50000 }, expected: "Product ID must be a positive integer" },
  { label: "blank name", value: { id: 123, name: "    ", priceCents: 50000 }, expected: "Product name must be nonempty text" },
  { label: "negative price", value: { id: 123, name: "Laptop", priceCents: -500 }, expected: "Price must be a nonnegative integer" },
  { label: "fractional price", value: { id: 123, name: "Laptop", priceCents: 12.5 }, expected: "Price must be a nonnegative integer" },
  { label: "zero ID", value: { id: 0, name: "Laptop", priceCents: 50000 }, expected: "Product ID must be a positive integer" },
  { label: "zero price", value: { id: 23, name: "Laptop", priceCents: 0 }, expected: { id: 23, name: "Laptop", priceCents: 0 } },
  { label: "trim and exclude extra", value: { id: 23, name: "  Laptop  ", priceCents: 50000, extra: true }, expected: { id: 23, name: "Laptop", priceCents: 50000 } },
];

for (const { label, value, expected } of testInputs) {
  let actual: unknown;
  try {
    actual = parseProduct(value);
    if (actual === value) throw new Error("Parser did not construct a fresh object");
  } catch (error) {
    actual = error instanceof Error ? error.message : "Unknown parsing error";
  }
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    throw new Error(`Unexpected result for ${label}: ${JSON.stringify(actual)}`);
  }
  console.log(`PASS ${label}: ${JSON.stringify(actual)}`);
}
console.log(`${testInputs.length}/${testInputs.length} product cases passed`);
