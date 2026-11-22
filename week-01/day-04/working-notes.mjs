// function requireName(name) {
//   if (name === "") {
//     throw new Error("Name is required");
//   }

//   return name;
// }

// try {
//   console.log(requireName(""));
// } catch (error) {
//   console.log(error.message);
// } finally {
//   console.log("Attempt complete");
// }

// function requirePositiveInteger(value) {
//   if (!Number.isInteger(value) || value <= 0) {
//     throw new Error("Value must be a positive integer");
//   }

//   return value;
// }

// try {
//   console.log(requirePositiveInteger(3));
// } catch (error) {
//   console.log(error.message);
// } finally {
//   console.log("Attempt complete");
// }

// try {
//   console.log(requirePositiveInteger(0));
// } catch (error) {
//   console.log(error.message);
// } finally {
//   console.log("Attempt complete");
// }

// const message = "Hello;
// console.log(message);

// const missing = undefined;
// console.log(missing.name);

// function calculateTotal(price, quantity) {
//    return price + quantity;
// }

// console.log(calculateTotal(100, 3));

// function processTitles(titles, onTitle) {
//   for (const title of titles) {
//     onTitle(title);
//   }
// }

// console.log("Before");

// processTitles(["Read", "Review"], (title) => {
//   console.log(title);
// });

// console.log("After");

// console.log("Start");

// const processData = () => {
//   for (let i = 0; i < 1000000; i++) {
//     // Simulate processing
//   }

//   console.log("Processing complete");
// };

// processData();

// console.log("End");

