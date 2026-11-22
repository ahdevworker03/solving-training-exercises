# Day 03 — Written Answers and Review Notes

## Chapter F — Arrays and Objects

- **F1:** `map` transforms each item, `filter` collects matching items, `find` returns the first match or `undefined`, `some` checks for any match, `every` checks for all, `reduce` accumulates, and `forEach` performs an action without producing an array. An absent task ID is safely accessed with optional chaining (`missingTask?.id`).
- **F2:** `const b = { ...a }` only copies the outer object, so `b.profile === a.profile` remains true. To change `b.profile.city` without changing `a`, also copy `profile` with `{ ...a.profile }`.
- **F3:** Use `map` and `{ ...task, done: true }` to replace only task 2. Use `filter` to remove task 1. `[firstTask, ...otherTasks]` extracts the first remaining task and collects the others. The original task 2 remains `done: false`.
- **F4:** `product[key]` evaluates the variable `key`, so it reads `priceCents`; `product.key` looks for a literal `key` property and yields `undefined`. `sum(...numbers)` collects arguments into an array; `reduce(..., 0)` sums them, including the empty case. The outer function must `return` the `reduce()` result.
- **F-K:** `filter` returns a new array but does not clone matching objects. `const` prevents reassignment of the array binding, not mutation of its contents. React state changes should preserve previous snapshots and produce new references along the changed nested path. `[].every(...)` is `true`: no element violates the condition.

## Chapter G — Modules and Modern Syntax

- **G1:** A named export `countOpen(tasks)` counts `done === false`; the default `formatCount(count)` produces `${count} open task(s)`. Import the default locally as `describeCount` and the named export with `{ countOpen }`.
- **G2:** A default export must be imported without braces. `import format from "./format.mjs"` is correct; `{ format }` requests a named export that the module does not provide.
- **G3:** `./tasks.mjs` is relative to the importing file's directory, while `../tasks.mjs` refers to a file one directory above. `require` and `module.exports` are CommonJS. `.mjs` explicitly selects Node.js ESM without needing a project-wide `"type": "module"` declaration.
- **G-K:** A module can have at most one default export. Alias a named import with `as`, for example `import { getUser as findUser } from "./users.mjs"`. Top-level module bindings are not automatically global; values must be exported to be imported in other modules.

## Corrections accepted during review

Initial F1 `filter`/`some` conditions selected completed rather than unfinished tasks. F3 initially lacked an immutable task update and correct destructuring. F4 initially omitted the outer `return` from `sum`. G1 initially imported the default function under the wrong local name; G2 and G3 were corrected in review. All F1–F4, F-K, G1–G3, and G-K ultimately passed the guided review.
