# Day 02 — Written answers and corrections

Consolidated from the trainee's study session and subsequent corrections. These explanations are not independent proof of the original terminal executions.

## Chapter D — Functions

- **D1:** Parameters name inputs in a function definition; arguments are values supplied at the call site. The default `quantity = 1` applies when omitted or `undefined`. A declaration and an arrow function both calculate `priceCents * quantity`.
- **D2:** An arrow function with `{}` needs an explicit `return` to return a computed expression; an expression-bodied arrow returns implicitly. Without `return`, the original returned `undefined`.
- **D3:** `transformTitle(title, transform)` receives a callback as a function value, invokes it with `title`, and returns its result. Passing `uppercase` is different from passing the already-evaluated result `uppercase("hello")`. This callback runs synchronously.
- **D4:** Base case: `count <= 0` returns `"Done"`. Progress step: `countdownText(count - 1)`. Each call returns a string composed from its own count plus the recursive result.
- **D-K:** `console.log` displays output while `return` sends a value back to the caller. A higher-order function accepts or returns a function. Callbacks may run immediately or later.

## Chapter E — Scope and execution

- **E1:** The inner `name = "Lina"` shadows `name = "Maya"` only inside its block. Output: `Lina`, `Maya`. Lexical scope depends on where a function is defined.
- **E2:** Every `makeCounter(start)` call creates a distinct `count` binding retained by its returned closure. Starts 0 and 10 with calls first/first/second/first yield `1, 2, 11, 3`. Equal starting values would still be independent.
- **E3:** Reading `total` before `const total = 5` throws `ReferenceError` (temporal dead zone). `user.describe()` receives `user` as its `this`; `const describe = user.describe; describe()` calls the detached function without that receiver, producing `TypeError` in an ES module. `.bind(user)` fixes the receiver. `const result = user.describe()` stores the returned string rather than the function.
- **E-K:** A closure retains access to surrounding lexical bindings, not just `return` or `this`. If `outer()` calls `inner()`, `inner()` is on top of the call stack while it executes. A `var` binding initially reads as `undefined` before assignment, unlike `let`/`const` in their temporal dead zone.

## Review notes

The trainee corrected initial misunderstandings about callbacks, recursive return values, closure independence, detached methods and the call stack. All nine Day 2 exercises and knowledge checks were accepted in the guided review.
