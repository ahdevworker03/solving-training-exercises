# Daily Work Update — Week 2, Day 01

- **Date:** November 23, 2026
- **Training:** BHASolution — Month 1, Week 02
- **Focus:** TypeScript Essentials Chapters A–C

## Done today

- Studied TypeScript static checking, compilation, runtime behavior, module output and strict compiler configuration.
- Practiced fundamental types, object shapes, arrays, tuples, unions, `unknown`/`any`, `void`/`never`, literal types, inference and optional properties.
- Attempted and reviewed all **12 official A–C exercises and knowledge checks** (A1–A3, A-K; B1–B3, B-K; C1–C3, C-K).
- Corrected an initial object type annotation error and the missing `tsconfig.json` setup issue.
- Prepared separate TypeScript exercise files and recorded written answers.

## Evidence

- **Repository:** https://github.com/ahdevworker03/solving-training-exercises
- **Published exercise sources on `main`:** [`week-02/ts-practice/`](https://github.com/ahdevworker03/solving-training-exercises/tree/main/week-02/ts-practice)
- **Written exercise responses:** [`written-answers.md`](written-answers.md).
- **Environment verified:** Node.js `v24.22.3`, TypeScript `7.0.2`.
- **Compiler verification:** `npx tsc -p . --noEmit` — exit 0; `npx tsc -p .` — exit 0.
- **Observed JavaScript outputs:**
  - `hello.mjs` — `Maya has 3 tasks.`
  - `a1-product.mjs` — `Markab is monthly at 39 $`
  - `b1-product.mjs` — `Abdallah`
  - `b2-arrays.mjs` — `Empty`
  - `b3-types.mjs` — exit 0 without output (functions are not called).
  - `c2-types.mjs` — `draft { name: 'Keyboard', discountCents: null }`
  - `c3-optional.mjs` — `{ name: 'Abdallah' }`
- **Git hygiene:** `node_modules/` and `dist/` are ignored; source files, `tsconfig.json`, `package.json` and `package-lock.json` are tracked in the handoff.
- **Known limits:** The A2 error was observed and reported during training, but final verification only reran the corrected project. The answers reflect guided review, not formal instructor approval. Time spent was not recorded.

## Next action

- Begin Day 2: TypeScript Chapters D–F (interfaces, aliases, functions, narrowing) and their 12 official exercises/checks.
- Retain compiler diagnostics and runtime outputs with each subsequent day's exercise evidence.

## Blockers / help needed

- No unresolved TypeScript A–C learning blocker.
- No external instructor sign-off has been recorded.
