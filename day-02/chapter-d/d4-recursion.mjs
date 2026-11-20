// D4 — Recursive countdown with a base case and progress step.
// Intended for nonnegative integers; use small counts.
function countdownText(count) {
  if (count <= 0) {
    return "Done";
  }
  return `${count} ${countdownText(count - 1)}`;
}

console.log(countdownText(3));
console.log(countdownText(0));
console.log(countdownText(2));
