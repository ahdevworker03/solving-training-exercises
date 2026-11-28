type Counts = Record<"open" | "done", number>;
const count: Counts = {
  open: 7,
  done: 10,
}

type Product = {
  id: number;
  name: string;
  priceCents: number;
};

type ProductView = Readonly<Product>;

const product: Product = {
  id: 23,
  name: "aballah",
  priceCents: 333,
}
const productView: ProductView = product;
console.log(productView);
product.name = "Laptop";
console.log(productView.name);

console.log(count);
