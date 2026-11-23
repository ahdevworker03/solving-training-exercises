const status: "draft" | "published" | "archived" = "draft";

const product: {
  name: string;
  description?: string;
  discountCents: number | null;
} = {
  name: "Keyboard",
  discountCents: null,
};

console.log(status, product);
