type Product = {
  id: number;
  name: string;
};

type ProductState =
  | { status: "loading" }
  | { status: "success"; products: Product[] }
  | { status: "error"; message: string };

function summarize(state: ProductState): string {
  switch (state.status) {
    case "loading":
      return "Loading product";
    case "success":
      return `${state.products.length} product(s)`;
    case "error":
      return state.message;
  }
}

const products: Product[] = [{ id: 1, name: "Read" }, { id: 2, name: "write" }];

let selectedId: number | null = null;
selectedId = 2;
console.log(`Selected ID: ${selectedId}`);

console.log(summarize({ status: "loading" }));

console.log(
  summarize({
    status: "success",
    products
  })
);

console.log(
  summarize({
    status: "error",
    message: "Failed to load products"
  })
);
