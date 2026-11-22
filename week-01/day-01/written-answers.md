# Day 1 — Written Exercise Answers

These answers were reconstructed from the ChatGPT study session
after instructor-style review and corrections.
They are not independent terminal execution evidence.

## Chapter A

### A2 — Prediction
- `"3 + 4"` prints the literal string `3 + 4`.
- `3 + 4` evaluates to the number `7`.
- Quotation marks distinguish a string from an arithmetic expression.

### A3 — Debugging
- The actual file is `hello.mjs.txt`, but Node looks for `hello.mjs`.
- Fix: Rename the file to `hello.mjs`.
- Root cause: Filename mismatch.

### A-K — Knowledge Check
- Runtime: An environment that executes code and provides APIs.
- `node welcome.mjs` is a terminal command, not JavaScript source.
- Browsers provide DOM/browser APIs; Node.js provides APIs such
  as filesystem access.

## Chapter B

### B2 — Predictions
- `"5" + 2` => `"52"` (string).
- `Number("5") + 2` => `7` (number).
- `Boolean("false")` => `true` (boolean).
- `typeof null` => `"object"` (string).
- The Boolean prediction was corrected during review.

### B3 — Debugging
- `const` bindings cannot be reassigned.
- Changing `const quantity = 2` to `let quantity = 2`
  permits the subsequent reassignment to 3.
- A const object binding cannot be reassigned, but its
  object's properties can still be modified.

### B-K — Knowledge Check
- Primitives: string, number, boolean, undefined, null,
  bigint, symbol.
- null usually represents intentional absence.
- undefined commonly represents an unassigned or missing value.
- `[]` is truthy; `""` is falsy.
- In an if/else, a falsy condition selects the else branch.

## Chapter C

### C2 — Predictions
- `settings.limit || 5` => 5 when limit is 0.
- `settings.limit ?? 5` => 0 when limit is 0.
- `settings.owner?.name ?? "Unassigned"` => "Unassigned"
  when owner is null.
- `||` falls back on falsy values.
- `??` falls back only on null or undefined.
- `?.` stops property access safely on null or undefined.

### C4 — Explanation
- A missing break allows a switch case to fall through.
- `for...in` iterates over enumerable property keys.
- `for...of` iterates over iterable values, such as array items.

### C-K — Knowledge Check
- `===` compares without type coercion; `==` may coerce types.
- `break` exits a loop or switch.
- `continue` skips the remaining part of the current loop iteration.
- `||` can return a string or another operand value,
  not necessarily a boolean.
