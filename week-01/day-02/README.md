# Day 02 — JavaScript functions, scope, and Git fundamentals

Organized, runnable examples reconstructed from the reviewed Day 2 submissions in the original `day2work.mjs`. The working file contained commented examples; these files represent the corrected versions, not the user's initial attempts. The original file was removed from the latest repository tree after organizing; it remains accessible in Git history at commit `d64bcb542384be57af003037fc68feef6a29fc67`.

## Files

- `chapter-d/d1-functions.mjs` — declarations, arrow functions, default parameters
- `chapter-d/d2-missing-return.mjs` — explicit and implicit return
- `chapter-d/d3-callback.mjs` — callbacks and higher-order functions
- `chapter-d/d4-recursion.mjs` — recursive string return
- `chapter-e/e1-shadowing.mjs` — lexical and block scope
- `chapter-e/e2-closures.mjs` — independent counters
- `chapter-e/e3-scope-and-this.mjs` — temporal dead zone and detached methods
- `written-answers.md` — predictions and knowledge-check answers after review
- `git-lab-evidence.md` — user-supplied Git Tasks 1–3 observations
- `daily-update.md` — Day 2 report

## Run

From the repository root:

```sh
node day-02/chapter-d/d1-functions.mjs
node day-02/chapter-d/d2-missing-return.mjs
node day-02/chapter-d/d3-callback.mjs
node day-02/chapter-d/d4-recursion.mjs
node day-02/chapter-e/e1-shadowing.mjs
node day-02/chapter-e/e2-closures.mjs
node day-02/chapter-e/e3-scope-and-this.mjs
```

Expected output per file:

| File | Expected output (lines in order) |
| --- | --- |
| D1 | 600, 200, 600, 200 |
| D2 | 10, 10 |
| D3 | HELLO WORLD |
| D4 | 3 2 1 Done; Done; 2 1 Done |
| E1 | Lina; Maya |
| E2 | 1; 2; 11; 3 |
| E3 | 5; Maya; TypeError; Maya |

In E3, the `TypeError` is intentionally caught to demonstrate why an unbound method loses its receiver.

## Evidence and boundaries

- Source: [official Week 1 plan](https://github.com/ahdevworker03/bha-tech-solutions-training/blob/main/BHA-Tech-Solutions-Month-1-Students/02-Weekly-Plan/Week-01/Day-to-Day-Plan.md).
- Reconstructed examples were executed successfully with Node.js v22.16.0 in a separate validation environment. Local Node.js v24 verification remains recommended.
- Git practice was performed in an independent disposable local repository, `~/git-practice-day02`. Its files and history are not included here.
- Instructor approval has not been reported.
