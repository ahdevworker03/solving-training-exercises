# Day 05 — HTTP, Cookies, TLS, Network Lab and Git

Followed the official [Week 1 Day-to-Day Plan](https://github.com/ahdevworker03/bha-tech-solutions-training/blob/main/BHA-Tech-Solutions-Month-1-Students/02-Weekly-Plan/Week-01/Day-to-Day-Plan.md) and the [local network lab](https://github.com/ahdevworker03/bha-tech-solutions-training/tree/main/BHA-Tech-Solutions-Month-1-Students/05-Labs/network-lab).

## Learning

- HTTP requests, responses, methods, statuses and headers.
- Cookie/session basics: `HttpOnly`, `Secure`, `SameSite`, `Max-Age`.
- TLS: encryption, integrity and server authentication with certificates.
- Chrome DevTools: Network Headers/Response/Timing and browser Sources breakpoint.

## Request/response observations

These timings are **learner-observed** values from the local lab and are not fixed expected durations.

| Route | Method | HTTP | Body classification | Observed duration |
| --- | --- | --- | --- | --- |
| `/api/ok` | GET | 200 | Valid JSON, `ok: true` | 5.22 ms |
| `/api/http-error` | GET | 422 | Valid JSON, `ok: false` | 2.92 ms |
| `/api/invalid-json` | GET | 200 | Malformed JSON `{"broken":` | 2.14 ms |
| `/api/business-failure` | GET | 200 | Valid JSON, `ok: false` | 2.61 ms |

The API's normal JSON Content-Type is `application/json; charset=utf-8`; invalid JSON uses `text/plain; charset=utf-8`.

At the browser breakpoint for the success case, actual values were: `url = "/api/ok"`, `response.status = 200`, `response.ok = true`, and `data.ok = true` with the expected success message.

When the server was stopped, `node client.mjs` returned `network-or-abort` / `fetch failed` for its routes. After restart, it distinguished success, HTTP failure, parse failure and business failure. The lab's slow-request abort is separate from an unavailable-server connection failure.

## Week 1 project

The browser project is maintained at [../day-04/request-explorer/](../day-04/request-explorer/). All four buttons now make live HTTP requests, distinguish HTTP, JSON and business failures, and show a network error with HTTP status `N/A` when the server is unavailable.

From the repository root:

```sh
PORT=4178 node day-04/request-explorer/server.mjs
```

Then open `http://127.0.0.1:4178/` and use the buttons. No external credentials or services are needed. The local copied server also returns HTTP 400 for malformed request paths instead of crashing.

## Git

- Task 6: `origin` configured, `git fetch origin` executed, and a training branch created. The repository owner later consolidated the branches and published the work directly to `main`; no PR was required.
- Task 7: Explained working tree, staging, commit history and remote fetch/push correctly after review.
- Task 8: Completed `restore --staged`, `stash`/`stash pop`, and `revert` in a separate, disposable local Git repository.

Do not include cookies or credential-bearing Network screenshots in the submission.
