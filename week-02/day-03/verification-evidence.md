# Day 3 — Verification evidence

Verified November 28, 2026. Node v24.22.3; Version 7.0.2. Assistant-executed on the learner's local device. No real HTTP requests.

## Strict compiler diagnostics

Each snippet was checked in an isolated temporary project using the original tsconfig and installed compiler. The failing and corrected snippets are separate from the working sources.

### A2

Invalid:
```ts
const price: number = "500";
```

Observed (exit 1):
```text
src/diagnostic.mts(1,7): error TS2322: Type 'string' is not assignable to type 'number'.
```

Corrected (exit 0):
```ts
const price: number = 500;
```

### B2

Invalid:
```ts
const names: string[] = []; const first: string = names[0];
```

Observed (exit 1):
```text
src/diagnostic.mts(1,35): error TS2322: Type 'string | undefined' is not assignable to type 'string'.
  Type 'undefined' is not assignable to type 'string'.
```

Corrected (exit 0):
```ts
const names: string[] = []; const first: string = names[0] ?? "Empty";
```

### C3

Invalid:
```ts
const product: { description?: string } = { description: undefined };
```

Observed (exit 1):
```text
src/diagnostic.mts(1,7): error TS2375: Type '{ description: undefined; }' is not assignable to type '{ description?: string; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'description' are incompatible.
    Type 'undefined' is not assignable to type 'string'.
```

Corrected (exit 0):
```ts
const product: { description?: string | undefined } = { description: undefined };
```

### G-K

Invalid:
```ts
function printName<T>(item: T): void { console.log(item.name); }
```

Observed (exit 1):
```text
src/diagnostic.mts(1,57): error TS2339: Property 'name' does not exist on type 'T'.
```

Corrected (exit 0):
```ts
function printName<T extends {name: string}>(item: T): void { console.log(item.name); }
```

### H2

Invalid:
```ts
const product = {name: "Ali"}; const view: Readonly<typeof product> = product; view.name = "Laptop";
```

Observed (exit 1):
```text
src/diagnostic.mts(1,85): error TS2540: Cannot assign to 'name' because it is a read-only property.
```

Corrected (exit 0):
```ts
const product = {name: "Ali"}; const view: Readonly<typeof product> = product; product.name = "Laptop";
```

### H-K

Invalid:
```ts
const counts: Record<"open" | "done", number> = {open: 5};
```

Observed (exit 1):
```text
src/diagnostic.mts(1,7): error TS2741: Property 'done' is missing in type '{ open: number; }' but required in type 'Record<"done" | "open", number>'.
```

Corrected (exit 0):
```ts
const counts: Record<"open" | "done", number> = {open: 5, done: 0};
```

## Fresh build and runtime output

- Strict check: exit 0.
- Fresh build using the same config and an isolated outDir: exit 0.
- 27 source modules emitted and executed with exit 0.
- G3 and I1 have no standalone output (types-only and parser definition); I2/I3 exercise the parser.

### a1-product.mjs

```text
Markab is monthly at 39 $
```

### b1-product.mjs

```text
Abdallah
```

### b2-arrays.mjs

```text
Empty
```

### b3-types.mjs

```text
(no output)
```

### c2-types.mjs

```text
draft { name: 'Keyboard', discountCents: null }
```

### c3-optional.mjs

```text
{ name: 'Abdallah' }
{ description: undefined }
```

### d1-interfaces.mjs

```text
{ ID: 23, Name: 'Abdallah', Address: { City: 'Tripoli' }, Cohort: 'A' }
```

### d2-intersections.mjs

```text
Softwares
```

### e1-functions.mjs

```text
25 USD
50 EUR
12.5 USD
```

### e2-callbacks.mjs

```text
Learn TypeScript
```

### e3-predicates.mjs

```text
true
false
```

### f1-narrowing.mjs

```text
BHA-1
4
5
Ali
Guest
Guest
""
```

### f2-narrowing.mjs

```text
ali@example.com
123
Invalid title
Unknown failure
Unknown failure
```

### f3-discriminated-unions.mjs

```text
saved: 23
failed: Invalid data
```

### g1-generics.mjs

```text
Omar
20
undefined
20
30
Omar
undefined
second
undefined
```

### g2-generic-types.mjs

```text
{ value: 'Hello' }
{ value: { id: 23, name: 'Abdallah' } }
[ { value: 'markab' }, { value: 'content-os' } ]
```

### g3-promise-types.mjs

```text
(no output)
```

### h1-utility-types.mjs

```text
{ id: 23, name: 'abdallah' }
{ name: 'ali', priceCents: 212 }
{ name: 'ahmad' }
```

### h2-record-readonly.mjs

```text
{ id: 23, name: 'aballah', priceCents: 333 }
Laptop
{ open: 7, done: 10 }
```

### h3-omit-runtime.mjs

```text
{ id: 1, name: 'Ali', password: 'example-password' }
{ id: 1, name: 'Ali' }
```

### hello.mjs

```text
Maya has 3 tasks.
```

### i1-parse-product.mjs

```text
(no output)
```

### i2-verify-product.mjs

```text
PASS valid: {"id":23,"name":"Laptop","priceCents":50000}
PASS null: "Product must be an object"
PASS missing ID: "Product ID must be a positive integer"
PASS text ID: "Product ID must be a positive integer"
PASS blank name: "Product name must be nonempty text"
PASS negative price: "Price must be a nonnegative integer"
PASS fractional price: "Price must be a nonnegative integer"
PASS zero ID: "Product ID must be a positive integer"
PASS zero price: {"id":23,"name":"Laptop","priceCents":0}
PASS trim and exclude extra: {"id":23,"name":"Laptop","priceCents":50000}
10/10 product cases passed
```

### i3-assertion-boundary.mjs

```text
Product name must be nonempty text
LAPTOP
```

### j1-product-list-props.mjs

```text
select products 2
```

### j2-product-list-state.mjs

```text
Selected ID: 2
Loading product
2 product(s)
Failed to load products
```

### request-result.mjs

```text
Success: HTTP 200
HTTP error: 422
Parse error: HTTP 200, invalid JSON
Business failure: Rejected
Network/abort: No response received
PASS message: Success: HTTP 200
PASS wait: Success: HTTP 200
PASS operation: Success: HTTP 201
PASS completed operation: Success: HTTP 200
PASS stats: Success: HTTP 200
PASS business: Business failure: Rejected
PASS HTTP precedence: HTTP error: 422
PASS null: Validation error: HTTP 200, Expected an object
PASS array: Validation error: HTTP 200, Expected an object
PASS missing ok: Validation error: HTTP 200, Expected ok: true
PASS wrong endpoint shape: Validation error: HTTP 200, Expected a message
PASS wrong message type: Validation error: HTTP 200, Expected a message
PASS invalid business error: Validation error: HTTP 200, Expected a business error message
PASS negative wait: Validation error: HTTP 200, Expected a nonnegative finite duration
PASS invalid operation state: Validation error: HTTP 200, Expected a valid operation
PASS zero operation ID: Validation error: HTTP 200, Expected a valid operation
PASS fractional count: Validation error: HTTP 200, Expected a nonnegative integer count
17/17 response boundary cases passed
```

## Limits

These are 40 curriculum items, not 40 automated tests. The 10 product cases and 17 response cases compare outcomes and fail the script on a mismatch. The remaining modules were executed and inspected. The isolated compiler demonstrations are assistant-produced; they do not establish independent learner reproduction or historical per-chapter checks. The response boundary accepts already-parsed plain data; no HTTP, JSON decoding, timeouts, retries, React or later-day work was executed.
