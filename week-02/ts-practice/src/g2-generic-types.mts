type Box<T> = {
  value: T;
}
const box: Box<string> = {
  value: "Hello",
}
type Product = {
  id: number,
  name: string,
}
const boxProduct: Box<Product> = {
  value: { id: 23, name: "Abdallah" }
}

const stringBoxes: Array<Box<string>> = [{value: "markab"}, {value: "content-os"}];

console.log(box);
console.log(boxProduct);
console.log(stringBoxes);
