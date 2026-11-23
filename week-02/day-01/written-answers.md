# Week 2 · Day 1 — TypeScript A–C Written Answers

These explanations and predictions were supplied during the guided ChatGPT study session on November 23, 2026. They are not substitutes for terminal evidence. The working implementations live in `../ts-practice/src/`.

## Chapter A — Introduction and setup

- **A1:** `a1-product.mts` prints `Markab is monthly at 39 $`. Its emitted JavaScript omits the `: string` and `: number` annotations (type erasure).
- **A2:** Changing a numeric price to the string `"500"` produces a type mismatch (`Type 'string' is not assignable to type 'number'`). Fix it by using the number `500`. Previously emitted JavaScript may still run because `noEmitOnError` blocks new output but does not delete old files.
- **A3:** Successfully executing TypeScript does not establish that it passed the configured type checker. Run `npx tsc -p . --noEmit` to verify the project.
- **A-K:** Compile time checks source types and can emit JavaScript; runtime executes it under Node.js or a browser. `noEmitOnError: true` prevents new output on errors. `strict: true` does **not** enable `noUncheckedIndexedAccess` automatically. `--noEmit` disables output even when checking succeeds.

## Chapter B — Fundamental types

- **B1:** The inline product type contains a number ID, string name, boolean availability and `string[]` tags. The `[string, number]` tuple holds `["Abdallah", 23]`; printing element 0 yields `Abdallah`.
- **B2:** An empty array's `names[0]` can be `undefined`; `names[0] ?? "Empty"` safely produces a string. `unknown` is safer than `any` for unverified values because type-specific operations require narrowing.
- **B3:** A `number | null` ID models explicit absence. A `void` logger returns no useful result to the caller; a `never` function always throws and cannot return normally.
- **B-K:** Lowercase `string` is the conventional primitive annotation, not `String`. A tuple specifies a known positional shape. `number` does not enforce positivity or integrality.

## Chapter C — Inference and annotations

- **C1 (predicted before a dedicated C1 run):** `let count = 0` infers `number`; `const label = "open"` infers literal `"open"`; `const task = { status: "open" }` normally gives the mutable property `status` type `string`. `const` prevents rebinding, not property mutation.
- **C2:** The status type is `"draft" | "published" | "archived"`. Product `name` is required, `description?` may be omitted, and `discountCents: number | null` is a required field whose value may be null.
- **C3:** With `exactOptionalPropertyTypes: true`, `description?: string` allows omission but does not allow an explicitly present `description: undefined`. `description?: string | undefined` allows both. The final passing example omits `description` and prints `{ name: 'Abdallah' }`; the explicit-undefined demonstration is retained as commented code.
- **C-K:** A `number | string` union does not convert values. Annotate contracts, broader accepted values or empty collections when inference is insufficient. Optional properties can read as `undefined`.

## Verification and limits

- Source examples and written knowledge checks were reviewed in chat; this document records those responses after review.
- Fresh local project check `npx tsc -p . --noEmit` and compilation `npx tsc -p .` both returned exit code 0.
- The earlier A2 diagnostic was learner-reported during the session; a fresh fail-before-run was not reproduced as part of final verification.
- No external instructor approval is claimed.
