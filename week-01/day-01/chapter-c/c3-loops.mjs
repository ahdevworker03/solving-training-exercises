// Part 1 — for loop
// Write a for loop that calculates the sum of integers from 1 through 5.

// Expected result: 15.
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
}
console.log(sum);

// Part 2 — for...of, continue, and break
// Given:
// const tasks = ["Read", "", "Review", "Stop", "Extra"];

// Write a for...of loop that:
// - Prints the task names.
// - Skips the empty string using continue.
// - Stops before printing "Stop" using break.
// Expected output:
// Read
// Review
const tasks = ["Read", "", "Review", "Stop", "Extra"];
for (const task of tasks) {
  if (task === "") {
    continue;
  } else if (task === "Stop") {
    break;
  }
  console.log(task);
}

// Part 3 — while loop
let count = 3;

while (count > 0) {
  console.log(count);
  count--;
}
