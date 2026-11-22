// H1 — Validate a positive integer with try/catch/finally.
function requirePositiveInteger(value) {
  if (!Number.isInteger(value) || value <= 0) {
    throw new Error("Value must be a positive integer");
  }
  return value;
}

try {
  console.log(requirePositiveInteger(3));
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Attempt complete");
}

try {
  console.log(requirePositiveInteger(0));
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Attempt complete");
}
