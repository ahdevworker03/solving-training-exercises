# Day 06 — Week 1 Functional Verification

**Scheduled curriculum day:** November 21, 2026
**Actual review and checks:** November 22, 2026
**Published branch:** `main` (owner-managed direct publication; no PR).

## Acceptance criteria and observations

| Requirement | Evidence | Status |
| --- | --- | --- |
| Browser displays method, route and status | All four scenarios observed in UI; user confirmed rerun after local organization | Passed (manual report) |
| Success response | `GET /api/ok` → HTTP 200, `ok: true`, server message | Passed |
| HTTP failure | `GET /api/http-error` → HTTP 422, `ok: false`, `Validation failed.` | Passed |
| JSON parsing failure | `GET /api/invalid-json` → HTTP 200, malformed body `{"broken":`; UI displays parsing error | Passed |
| Business failure | `GET /api/business-failure` → HTTP 200, `ok: false`; UI shows domain-rule error | Passed |
| Network failure | Stop server without refreshing page, click button; UI shows `Network error`, `N/A`, `Cannot connect to the server.` | Passed (manual report) |
| Recovery | Restart server and retry success request | Passed (manual report) |
| CLI transforms | `map`, `filter`, `find`, `summarize` | Passed |
| CLI edge cases | Empty input returns `[]`; missing fields produce readable placeholders | Passed |
| Browser debugging | Real lab breakpoint: `url="/api/ok"`, status 200, `response.ok=true`, parsed data. Task form: `title="Study"`, `minutes=20`, `tasks.length=0` | Passed (recorded observations) |
| Full client trace | User demonstrated UI click, network entry and rendered output. Separate JavaScript breakpoint was captured in the official lab, not within the final Request Explorer's own click handler | Substantial evidence; project-specific breakpoint recommended for final walkthrough |
| Sanitized evidence | No screenshots committed. Some earlier screenshots showed a request cookie and **must not be published** | Safe textual evidence available; sanitized screenshot still optional/pending |
| Git handoff | Repository owner published consolidated work directly to `main`, without a PR | Complete; instructor review remains pending |

## Actual automated checks (November 22, local laptop)

- Node.js `v24.22.3`.
- 21 runnable JavaScript exercise files from Days 1–4 executed successfully (exit code 0).
- `node --check` passed for the updated H1 and J2 scripts and the copied server.
- Inline JavaScript syntax checks passed for `day-04/chapter-i/tasks.html` and `day-04/request-explorer/index.html`.
- Local HTTP smoke tests passed: page `/` served HTTP 200; `/api/ok` 200; `/api/http-error` 422; `/api/invalid-json` 200 with malformed JSON; `/api/business-failure` 200 with `ok:false`.
- Regression after previously observed server crash: malformed path `//` returned HTTP 400 and server remained available.
- A targeted credential-pattern scan found no matches in the local Day 1–5 text, **not** a guarantee that every form of secret is absent.

These tests validate exercised code paths, not full browser accessibility, network concurrency or production-level security.

## Manual browser checks

The trainee confirmed, after the file fixes, that the four request buttons, unavailable-server behavior, server recovery and task form worked as expected. The assistant did not independently operate the browser after those final edits.

## Run instructions

From the root of the `solving-training-exercises` repository:

```sh
PORT=4178 node day-04/request-explorer/server.mjs
```

Open `http://127.0.0.1:4178/` for the HTTP UI. Separately open `day-04/chapter-i/tasks.html` for the form.

Run the CLI:

```sh
node day-03/cli/request-summary.mjs
```

Run individual examples using the commands in `day-03/README.md` and `day-04/README.md`.

## Known limitations

- The server is intentionally local-only and uses in-memory data. No credentials, production deployment or persistence.
- Rapid repeated clicks and overlapping HTTP requests were not specifically stress-tested.
- Some verification evidence is recorded as text and user observations rather than a newly sanitized screenshot set.
- No PR was needed for the owner-managed repository. Instructor sign-off has not been received.
- The four-case client distinguishes outcomes but is not intended to implement promises or event-loop theory beyond the Week 1 scope.
