// Define a function named totalCents.
// It must accept priceCents and quantity.
// The quantity parameter must default to 1.
// Return the product of priceCents and quantity.
// Write an equivalent arrow function.
// Test both implementations using (200, 3) and (200).

// function totalCents(priceCents, quantity = 1) {
//   return priceCents * quantity;
// }
// const totalCents = (priceCents, quantity = 1) => priceCents * quantity;

// console.log(totalCents(200, 3));

// const double = (number) => number * 2;

// console.log(double(5));

// 1. Define a function named transformTitle(title, transform).
// 2. The first parameter receives a string.
// 3. The second parameter receives a callback function.
// 4. Return the result of calling the callback with the title.
// 5. Call transformTitle using a callback that converts the title to uppercase.
// 6. Explain why we pass a function rather than its already-calculated result.
// Expected behavior:

// Input: "hello world"

// Output: "HELLO WORLD"
// Hints
// Remember these concepts:
// - .toUpperCase() converts a string to uppercase.
// - Functions can be passed as values.
// - callback refers to a function, while callback() invokes it.
// - The outer function should return the callback's result.

// function transformTitle(title, transform) {
//   return transform(title);
// }

// const uppercase = (text) => text.toUpperCase();

// console.log(transformTitle("hello world", uppercase));

// function countdownText(count) {
//   if (count <= 0) {
//     return `Done`;
//   }
//   return `${count} ${countdownText(count - 1)}`;
// }

// console.log(countdownText(3));
// console.log(countdownText(0));
// console.log(countdownText(2));

// const city = "Tripoli";

// {
//   const city = "Beirut";
// }

// console.log(city);

// Write a function named makeCounter(start) that:
// 1. Accepts a starting number.
// 2. Creates a private counter initialized to start.
// 3. Returns an inner function that increments and returns the counter.
// 4. Creates two independent counters starting at 0 and 10.
// 5. Calls them in this order: first, first, second, first.
// 6. Explains why the counters maintain independent values.
// Expected outputs:
// 1
// 2
// 11
// 3

// function makeCounter(start) {
//   let count = start;
//   return function () {
//     count++;
//     return count;
//   };
// }
// const counter_1 = makeCounter(0);
// const counter_2 = makeCounter(10);

// console.log(counter_1());
// console.log(counter_1());
// console.log(counter_2());
// console.log(counter_1());
// const total = 5;

// console.log(total);

// const user = {
//   name: "Maya",

//   describe() {
//     return this.name;
//   },
// };

// // console.log(user.describe());

// const describe = user.describe;
// console.log(describe());

// const user = {
//   name: "Ali",
//   greet() {
//     return this.name;
//   },
// };

// const fn = user.greet;
// console.log(fn);

// const person = {
//   name: "Maya",
//   sayName() {
//     return this.name;
//   },
// };

// const result = person.sayName();

// console.log(result);

// console.log(count);
// const count = 10;
