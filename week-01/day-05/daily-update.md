# BHASolution — Day 05 Daily Training Update

**Curriculum date:** November 20, 2026
**Completion reviewed:** November 22, 2026
**Focus:** HTTP and security fundamentals; Network DevTools; Git Tasks 6–8; live Request Explorer

## Completed

- HTTP basics, cookies, TLS and related knowledge checks.
- Local network lab Exercises 1, 2 and 7: four expected responses, request headers/bodies/timings, debugger trace, unavailable-server failure and recovery.
- Git Task 7 conceptual questions and Task 8 `restore --staged`, `stash`, `stash pop`, `revert` on disposable local changes.
- Connected the Request Explorer to four real API endpoints with `fetch`, then added distinct HTTP-error, JSON-parse-error, business-failure and network-failure handling.
- Observed request headers, response bodies and network timing; successfully demonstrated HTTP 422 and HTTP 200 business failure.

## Evidence

- [Day 5 notes and observations](README.md)
- [Project code](../day-04/request-explorer/index.html)
- [Mock server](../day-04/request-explorer/server.mjs)
- Git Task 8 disposable repository history reported: `e609c34` (initial), `e008928` (edit), `7aa6999` (revert).
- Subsequent local smoke checks verified the served page, four expected API responses, and malformed `//` path handling.

## Remaining / uncertainty

- At the time of Day 5, Git Task 6 push/review was pending. Week 1 was subsequently published directly to `main` by the repository owner, without a PR.
- Fresh manual browser verification is required after the final local file organization.
- Original request screenshot evidence may contain a cookie; do not commit it without redacting the cookie and other sensitive headers.
- Actual time spent is not recorded.

## Next

Day 6 final project verification, then Day 7 code review, weekly report and walkthrough preparation. Instructor approval remains pending.
