type Product = {
  id: number;
  name: string;
};

type ProductListProps = {
  products: Product[];
  onSelect: (id: number) => void;
}

const props: ProductListProps = {
  products: [{ id: 1, name: "Read" }, {id:2, name: "write"}],
  onSelect: (id) => console.log(`select products ${id}`)
};

props.onSelect(2);
