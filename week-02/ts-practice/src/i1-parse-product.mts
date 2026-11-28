type Product = {
  id: number;
  name: string;
  priceCents: number;
};

export function parseProduct(value: unknown): Product  {
    if (typeof value !== "object" || value === null) {
    throw new Error("Product must be an object");
  }

    if (
    !("id" in value) ||
    typeof value.id !== "number" ||
    !Number.isInteger(value.id) ||
    value.id <= 0
  ) {
    throw new Error("Product ID must be a positive integer");
  }

  if (
    !("name" in value) ||
    typeof value.name !== "string" ||
    value.name.trim() === ""
  ) {
    throw new Error("Product name must be nonempty text");
  }

if (
  !("priceCents" in value) ||
  typeof value.priceCents !== "number" ||
  !Number.isInteger(value.priceCents) ||
  value.priceCents < 0
) {
  throw new Error("Price must be a nonnegative integer");
}

    const product: Product = {
    id: value.id,
    name: value.name.trim(),
    priceCents: value.priceCents,
  };

  return product;

}
