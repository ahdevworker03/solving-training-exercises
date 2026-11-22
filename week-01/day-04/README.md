# Day 04 — Error Handling, Browser JavaScript and Synchronous Execution

Official Week 1 curriculum: [Day-to-Day Plan](https://github.com/ahdevworker03/bha-tech-solutions-training/blob/main/BHA-Tech-Solutions-Month-1-Students/02-Weekly-Plan/Week-01/Day-to-Day-Plan.md).

## Exercises

- `chapter-h/h1-positive-integer.mjs` — H1: integer validation with `try/catch/finally`
- `chapter-i/tasks.html` — I1–I3: browser form, validation, task list and total estimated minutes
- `chapter-j/j2-process-titles.mjs` — J2: synchronous callbacks in a `for...of` loop
- `written-answers.md` — H2, H3, H-K, I-K, J1, J3 and J-K review answers
- `working-notes.mjs` — preserved commented practice and debugging examples
- `request-explorer/index.html` — Week 1 Request Explorer (initially built as the Day 4 UI skeleton; connected to HTTP on Day 5)
- `request-explorer/server.mjs` — copied, local-only BHASolution mock HTTP server; malformed URL guard added in this copy

## Run

From the training exercises repository root:

```sh
node day-04/chapter-h/h1-positive-integer.mjs
node day-04/chapter-j/j2-process-titles.mjs
PORT=4178 node day-04/request-explorer/server.mjs
```

Open `http://127.0.0.1:4178/` in a browser. Open `day-04/chapter-i/tasks.html` separately for the form exercise.

Request Explorer uses live HTTP requests for all four scenarios. The initial skeleton used mock data, but that was superseded during Day 5.

For manual DevTools evidence, a `tasks.html` breakpoint before `const task` showed `title = "Study"`, `minutes = 20` and `tasks.length = 0`.

See [Day 4 daily update](daily-update.md).
