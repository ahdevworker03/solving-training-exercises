# Week 1 — JavaScript, HTTP, Git and debugging

**Dates:** November 16–22, 2026  
**Status:** Exercises and project published on `main`; instructor acceptance is pending.

## Official training materials

- [Week 1 requirements](https://github.com/ahdevworker03/bha-tech-solutions-training/blob/main/BHA-Tech-Solutions-Month-1-Students/02-Weekly-Plan/Week-01/README.md)
- [Week 1 day-to-day plan](https://github.com/ahdevworker03/bha-tech-solutions-training/blob/main/BHA-Tech-Solutions-Month-1-Students/02-Weekly-Plan/Week-01/Day-to-Day-Plan.md)
- [JavaScript guide, Chapters A–J](https://github.com/ahdevworker03/bha-tech-solutions-training/blob/main/BHA-Tech-Solutions-Month-1-Students/01-Shared-Materials/Programming-Fundamentals/javascript/javascript-fundamentals.md)
- [Official JavaScript exercises](https://github.com/ahdevworker03/bha-tech-solutions-training/blob/main/BHA-Tech-Solutions-Month-1-Students/01-Shared-Materials/Programming-Fundamentals/javascript/exercises.md)

## Existing solutions and evidence

The completed Week 1 folders remain at their original paths to preserve published links.

| Day | Solution or evidence |
| --- | --- |
| 1 | [JavaScript A–C and daily update](../day-01/) |
| 2 | [JavaScript D–E and Git lab](../day-02/) |
| 3 | [JavaScript F–G and Node request-summary CLI](../day-03/) |
| 4 | [JavaScript H–J, browser form and Request Explorer](../day-04/) |
| 5 | [HTTP, DevTools and Git lab evidence](../day-05/) |
| 6 | [Verification and regression evidence](../day-06/verification.md) |
| 7 | [Final daily update](../day-07/daily-update.md) |

**Weekly report:** [November 16–22 submission](weekly-report.md).

## Run Week 1 deliverables

From the repository root:

```sh
node day-03/cli/request-summary.mjs
PORT=4178 node day-04/request-explorer/server.mjs
```

Open `http://127.0.0.1:4178/`. The local server and UI handle success, HTTP error, malformed JSON, business failure, and network failure. See [verification notes](../day-06/verification.md) for tested cases and limitations.

**Git history:** Day 3 branch/merge/conflict practice is retained in `main` history. This training repository was published directly to `main` by the owner, without a PR.
