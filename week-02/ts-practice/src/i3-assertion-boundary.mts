import { parseProduct } from "./i1-parse-product.mjs";

// Replace the unsafe incoming as Product assertion with actual validation.
const inputs: unknown[] = [
  { id: 23, name: 123, priceCents: 50000 },
  { id: 23, name: "Laptop", priceCents: 50000 },
];

for (const incoming of inputs) {
  try {
    const product = parseProduct(incoming);
    console.log(product.name.toUpperCase());
  } catch (error) {
    console.log(error instanceof Error ? error.message : "Unknown parsing error");
  }
}
