// D3 — Higher-order function and synchronous callback.
function transformTitle(title, transform) {
  return transform(title);
}

const uppercase = (text) => text.toUpperCase();
console.log(transformTitle("hello world", uppercase));
