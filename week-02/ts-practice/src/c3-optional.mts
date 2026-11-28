// const product: {
//   description?: string | undefined;
// } = {
//   description: undefined
// };
// console.log(product);

type product = {
  description?: string;
  name: string;
}

const variableName: product ={
  name: "Abdallah",
}

console.log(variableName);

const explicitUndefined: { description?: string | undefined } = {
  description: undefined,
};
console.log(explicitUndefined);
