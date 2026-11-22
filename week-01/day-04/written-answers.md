# Day 04 — Reviewed Exercise Answers

These are concise final answers from guided practice, not a claim that every earlier attempt was correct.

## Chapter H

- **H1:** `requirePositiveInteger(value)` uses `Number.isInteger(value)` and `value > 0`. It returns 3 and throws an `Error` for 0; each `finally` prints `Attempt complete`. See executable file.
- **H2:** An unclosed quote is a syntax error; accessing `missing.name` when `missing` is `undefined` is a runtime error; using `price + quantity` instead of multiplication is a logic error. Put a breakpoint on the calculation and inspect `price` and `quantity`.
- **H3:** In `at calculateTotal (file:///practice/prices.mjs:8:12)`, investigate line 8, column 12 first because it is the first relevant stack frame. An empty `catch` silently suppresses the failure; logging may aid diagnosis but does not fix the cause.
- **H-K:** `Number("bad")` returns `NaN` rather than throwing. `finally` runs after a caught throw in ordinary execution. A `try` block in a file cannot catch a syntax error that prevents the same file from parsing.

## Chapter I

- **I1:** The form's `submit` event handles both clicking the button and pressing Enter. Input `.value` reads the form control's current value. `.textContent` writes or reads plain text on an element.
- **I2:** Total minutes are computed with `tasks.reduce((sum, task) => sum + task.minutes, 0)` and updated only after valid submissions.
- **I3:** Invalid whitespace titles are rejected by the handler. An HTML number input with `min="1"` and `step="1"` may block 0 or fractions before the submit handler. An entered title `<b>Read</b>` displays as literal text because of `.textContent`; using `.innerHTML` on untrusted text risks XSS.
- **I-K:** `event.preventDefault()` prevents native form submission/navigation. The in-memory `tasks` array does not survive page reload without persistence.

## Chapter J

- **J1:** Output order is `A B C D E`. An arrow callback does not become asynchronous just because it is an arrow function.
- **J2:** A `for...of` loop invokes `onTitle(title)` synchronously. Output is `Before`, `Read`, `Review`, `After`. See executable file.
- **J3:** A large loop inside an arrow function still blocks subsequent synchronous statements. Example output: `Start`, `Processing complete`, `End`.
- **J-K:** The code or API invoking a callback determines when it is called. A synchronous loop finishes before the next synchronous statement proceeds.
