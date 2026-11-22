# Week 1 — BHASolution Intern Report

- **Intern:** Abdallah Hassoun
- **Reporting dates:** November 16–22, 2026
- **Repository:** https://github.com/ahdevworker03/solving-training-exercises
- **Branch:** `main` (published directly to GitHub by the repository owner).
- **Publication / tested version:** Published directly to [GitHub `main`](https://github.com/ahdevworker03/solving-training-exercises/commits/main), without a PR (owner-managed repository). The Day 4–7 project was tested locally before publication; see Day 6 verification for exact commands and limitations.
- **Actual time spent (estimate):** Not recorded. The official plan's 40-hour envelope is a target, not evidence of actual hours.

## Material completed

Source: [Official Week 1 Day-to-Day Plan](https://github.com/ahdevworker03/bha-tech-solutions-training/blob/main/BHA-Tech-Solutions-Month-1-Students/02-Weekly-Plan/Week-01/Day-to-Day-Plan.md) and [JavaScript exercise list](https://github.com/ahdevworker03/bha-tech-solutions-training/blob/main/BHA-Tech-Solutions-Month-1-Students/01-Shared-Materials/Programming-Fundamentals/javascript/exercises.md).

| Day | Chapters | Official exercise IDs | Guided review |
| --- | --- | --- | --- |
| 1 | A–C: runtime, data types, control flow | A1–A3, A-K; B1–B3, B-K; C1–C4, C-K | 13/13 accepted |
| 2 | D–E: functions, callbacks, recursion, scope | D1–D4, D-K; E1–E3, E-K | 9/9 accepted |
| 3 | F–G: arrays, immutable objects, ES modules | F1–F4, F-K; G1–G3, G-K | 9/9 accepted |
| 4 | H–J: errors, browser DOM, synchronous execution | H1–H3, H-K; I1–I3, I-K; J1–J3, J-K | 12/12 accepted |
| **Total** | **A–J** | **43 official exercise / knowledge-check items** | **43/43 reviewed in guided training** |

Other completed material:
- [MDN HTTP overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview): client/server model, methods, headers, statuses, and HTTP-vs-business success.
- [MDN cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies): sessions; `HttpOnly`, `Secure`, `SameSite`, `Max-Age`.
- [MDN TLS](https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Transport_Layer_Security): encryption, integrity, server certificates.
- [Chrome Network panel](https://developer.chrome.com/docs/devtools/network/) and [JavaScript debugger](https://developer.chrome.com/docs/devtools/javascript/): actual request inspection and breakpoint observations.
- Git lab Tasks 1–5 and 7–8 completed; Task 6 remote inspection/fetch was completed, and the Week 1 work was published directly to `main` without a PR.
- **Udemy section IDs:** Not recorded or verified in this handoff; do not claim Udemy completion without evidence.

## Practical work completed

1. **Request Explorer browser application:** [`day-04/request-explorer/index.html`](../day-04/request-explorer/index.html) + [local mock `server.mjs`](../day-04/request-explorer/server.mjs). Four buttons send real GET requests to `/api/ok`, `/api/http-error`, `/api/invalid-json`, and `/api/business-failure`. Displays method, route, actual status and readable results. Separates HTTP failure, JSON parse failure, business failure despite HTTP 200, and unavailable-server/network error with status `N/A`. The copied mock server has a local guard for malformed request URLs.
2. **Node CLI:** [`day-03/cli/request-summary.mjs`](../day-03/cli/request-summary.mjs) transforms synthetic request summaries using `map`, `filter`, `find` and the `summarize()` function. It handles empty arrays and missing fields.
3. **Browser task form:** [`day-04/chapter-i/tasks.html`](../day-04/chapter-i/tasks.html) supports button/Enter submit, validates title and integer minutes, shows running totals with `reduce`, and displays user input with `textContent`.
4. **Git lab:** Initialized a disposable repository; practiced staging/commit, branching and merging, deliberate conflict resolution, `git fetch`, `git restore --staged`, `git stash`/`pop`, and `git revert`. See [Day 2](../day-02/git-lab-evidence.md), [Day 3](../day-03/git-lab-evidence.md) and [Day 5](../day-05/README.md).

## Evidence

**Run instructions** — from the repository root, with Node.js:

```sh
PORT=4178 node day-04/request-explorer/server.mjs
# Open http://127.0.0.1:4178/ in Chrome
node day-03/cli/request-summary.mjs
node day-04/chapter-h/h1-positive-integer.mjs
node day-04/chapter-j/j2-process-titles.mjs
```

Open `day-04/chapter-i/tasks.html` separately for the form exercise.

**Commands executed and actual results:** On November 22, Node.js `v24.22.3`: 21 runnable `.mjs` exercise files passed (exit code 0); Node and inline browser-script syntax checks passed; HTTP smoke checks passed for `/` and all four routes; malformed `//` request returned HTTP 400 without crashing the copied server. The intern confirmed final browser tests of all four buttons, server outage/recovery and task form after local organization. Full details: [Day 6 verification](../day-06/verification.md).

**Expected vs. actual examples:**
- `GET /api/http-error`: expected HTTP 422 + `{"ok":false,"error":"Validation failed."}`; actual browser/network evidence matched.
- `GET /api/invalid-json`: expected HTTP 200 and malformed `{"broken":`; observed parsing-error UI even though HTTP transport succeeded.
- `GET /api/business-failure`: expected HTTP 200 and JSON `ok:false`; observed domain failure display rather than success.
- Unavailable server: expected no HTTP response; browser displayed `Network error`, `N/A`, `Cannot connect to the server.` and recovered after restart.
- CLI empty/missing fields: output showed empty summaries `[]` and a readable incomplete request summary, not a crash.

**Sanitized trace (text only, not a credential-bearing screenshot):** `GET http://127.0.0.1:4177/api/ok` → 200, `application/json; charset=utf-8`, body `{"ok":true,"message":"This is a successful response."}`; learner observed duration 5.22 ms. Other learner-observed timings: HTTP error 2.92 ms, invalid JSON 2.14 ms, business failure 2.61 ms. These values are measurements, not guarantees.

**Debugger observation:** At a breakpoint in the official browser network lab: `url="/api/ok"`, `response.status=200`, `response.ok=true`, `data.ok=true`. At the task-form breakpoint: `title="Study"`, `minutes=20`, `tasks.length=0` before insertion. The final project's own click-handler breakpoint can be demonstrated during the walkthrough.

**Regression (before/after):** A malformed `//` URL previously caused `ERR_INVALID_URL` and terminated the copied Node server. After adding request-URL parse handling, the same malformed path returned HTTP 400 and the server remained alive. Separately, the task form's `for` attribute was corrected to match its input's `id`.