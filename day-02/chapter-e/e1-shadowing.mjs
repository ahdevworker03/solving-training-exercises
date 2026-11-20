// E1 — Block scope and variable shadowing.
const name = "Maya";

{
  const name = "Lina";
  console.log(name);
}

console.log(name);
