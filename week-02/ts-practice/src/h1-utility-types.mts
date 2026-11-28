// interface Product {
//   id: number;
//   name: string;
//   priceCents: number;
//   details: { stock: number };
// }

// type ProductPatch = Partial<
//   Pick<Product, "name" | "priceCents">
// >;

// type ProductSummary = Pick<Product, "id" | "name">;
// type NewProduct = Omit<Product, "id">;
// type ProductView = Readonly<Product>;
// type Counts = Record<"open" | "done", number>;

// const product: Product = {
//   id: 1,
//   name: "Notebook",
//   priceCents: 500,
//   details: { stock: 3 }
// };

// function applyPatch(
//   product: Product,
//   patch: ProductPatch
// ): Product {
//   return { ...product, ...patch };
// }

// const summary: ProductSummary = {
//   id: product.id,
//   name: product.name
// };

// const draft: NewProduct = {
//   name: "Pen",
//   priceCents: 100,
//   details: { stock: 5 }
// };

// const view: ProductView = product;

// const counts: Counts = {
//   open: 2,
//   done: 1
// };

// console.log(
//   applyPatch(product, { priceCents: 450 }).priceCents
// );

// console.log(summary.name, draft.name, view.id, counts.open);

type Product = {
  id: number;
  name: string;
  priceCents: number;
};

type ProductSummary = Pick<Product, "id" | "name">;
type NewProduct = Omit<Product, "id">;
type ProductPatch = Partial<Pick<Product, "name" | "priceCents">>;

const productSummary: ProductSummary = {
  id: 23,
  name: "abdallah",
}

const newProduct: NewProduct = {
  name: "ali",
  priceCents: 212,
}
const productPatch: ProductPatch = {
  name: "ahmad",
}
console.log(productSummary);
console.log(newProduct);
console.log(productPatch);
