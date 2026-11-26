# Week 2 · Day 2 — TypeScript D–F Written Answers

Scheduled for November 24, 2026; guided work took place November 25–26. These are the reviewed answers from the learner's attempts and instructor explanations, consolidated with AI assistance. Corrections and diagnostic demonstrations were assisted; they are not independent learner reproductions or formal instructor approval.

## Chapter D — Interfaces and type aliases

- **D1:** `Address` describes a city and optional street. `User` has readonly numeric `ID`, name, nested address and optional email. `Intern extends User` adds a required cohort. The constructed intern satisfies this shape. The emitted JavaScript contains no interface declarations.
- **D2:** `OwnedTask = Task & { ownerId: number }` combines the required fields. A stored OwnedTask can be passed to a function accepting `{ title: string }` because it has the required string property. TypeScript uses structural typing; the additional fields do not prevent assignment. A fresh object literal may be subject to excess-property checks.
- **D3:** Assigning `firstIntern.ID = 2` violates readonly (TS2540). Assigning `firstIntern.Address.City = "Beirut"` is allowed because City is writable. Readonly is a compile-time restriction and does not freeze the object or its nested properties. See [compiler evidence](compiler-evidence.md).
- **D-K:** A type alias can name a union. Interfaces support declaration merging. `instanceof User` is invalid when User is only an interface: it has no runtime constructor; Error and Date do.

## Chapter E — Functions

- **E1:** `formatPrice(cents: number, currency: string = "USD"): string` divides cents by 100 and includes the currency. The default applies to an omitted or undefined argument. Outputs: 25 USD, 50 EUR, 12.5 USD.
- **E2:** `OnSave = (title: string) => void` describes a callback; `saveTitle` trims the input and invokes it. The inline callback parameter is inferred as string from the expected callback type. Output: Learn TypeScript.
- **E3:** A predicate needs a usable boolean return, so use `(title: string) => boolean`; the implementation checks `title.length > 0`. A callback can ignore a required ID without making it optional. Optional means the caller may omit the argument; an implementation using it then needs to handle number or undefined. A void callback contract means its result is not used, not that a value-returning implementation can never be assigned to it.
- **E-K:** A function type declares the contract; the implementation provides the actual behavior. Contextual typing supplies parameters from the expected function signature. Both optional and defaulted parameters may be omitted; an optional string can be undefined inside the function, while a string with a default has a fallback for omitted or undefined input. Strict checking detects unsafe use of possibly undefined values.

## Chapter F — Type narrowing

- **F1:** A typeof string check makes uppercase safe; the other branch is numeric, and toFixed(0) returns a string. Explicit null and undefined checks return Guest only for missing names, preserving a valid empty string. JSON.stringify makes the empty output visible.
- **F2:** For the declared Contact union, `"email" in contact` distinguishes the email shape from the phone shape. `instanceof Error` narrows an unknown value to Error, permitting message access; other inputs return Unknown failure.
- **F3:** The saved/failed union has a common literal discriminant, kind. Only the saved case requires id; only the failed case requires message. Reading id before checking kind is rejected (TS2339), since the failed case does not declare it. A missing JavaScript property generally evaluates to undefined; the compile-time error prevents relying on unavailable data. See [compiler evidence](compiler-evidence.md).
- **F-K:** `typeof null === "object"` is a historical JavaScript behavior; check both typeof object and non-null before reading object properties. The in operator checks property presence (including inherited properties), not the property's value type. Unknown external data needs further value checks.

## Type guarantees and project preparation

TypeScript checks declared contracts before runtime; it does not freeze readonly objects, validate arbitrary parsed JSON, or enforce domain constraints by itself. Type assertions are not runtime evidence. The initial [RequestResult model](../ts-practice/src/request-result.mts) uses discriminated cases for success, HTTP error, parse error, business failure and network/abort. Its examples are synthetic values, not verified HTTP transactions. Runtime validation, actual networking and separate timeout/abort handling remain later work.

All 12 official D–F items were attempted/reviewed. Eight source files were compiled and executed. The diagnostic evidence was reproduced through assistant remote execution. The callback and null-check explanations required guided corrections; the learner should be able to explain them during review.
