# Week 2 — TypeScript, asynchronous JavaScript and reliability

**Status:** In progress. Days 1–3: all 40 TypeScript A–J items reviewed and audited; strict project compiles and all 27 modules execute. Product parser and synthetic response boundary verified. Days 4–7, live HTTP integration and instructor review remain pending.

- [Day 1 update](day-01/daily-update.md) · [Written answers](day-01/written-answers.md)
- [Day 2 update](day-02/daily-update.md) · [Written answers](day-02/written-answers.md) · [Compiler evidence](day-02/compiler-evidence.md) · [RequestResult sketch](ts-practice/src/request-result.mts)

- [Day 3 update](day-03/daily-update.md) · [Written answers](day-03/written-answers.md) · [40-item audit](day-03/exercise-audit.md) · [Verification evidence](day-03/verification-evidence.md)

From `week-02/ts-practice/`, run `npm ci` when dependencies are absent, then `npx tsc -p . --noEmit` and `npx tsc -p .`. Run `node dist/i2-verify-product.mjs` (10 checked cases), `node dist/i3-assertion-boundary.mjs` (unsafe-input rejection and valid uppercase), or `node dist/request-result.mjs` (17 checked synthetic response cases; no network). For J1/J2 use `node dist/j1-product-list-props.mjs` and `node dist/j2-product-list-state.mjs` separately.

## Official sources and sequence

- [Week 2 requirements and acceptance criteria](https://github.com/ahdevworker03/bha-tech-solutions-training/blob/main/BHA-Tech-Solutions-Month-1-Students/02-Weekly-Plan/Week-02/README.md)
- [TypeScript Essentials, Chapters A–J](https://github.com/ahdevworker03/bha-tech-solutions-training/blob/main/BHA-Tech-Solutions-Month-1-Students/01-Shared-Materials/Programming-Fundamentals/typescript/typescript-essentials.md)
- [TypeScript exercises — 40 official items](https://github.com/ahdevworker03/bha-tech-solutions-training/blob/main/BHA-Tech-Solutions-Month-1-Students/01-Shared-Materials/Programming-Fundamentals/typescript/exercises.md)
- [Local Node network lab and exercises](https://github.com/ahdevworker03/bha-tech-solutions-training/blob/main/BHA-Tech-Solutions-Month-1-Students/05-Labs/network-lab/README.md)
- [Networking and Node reading links](https://github.com/ahdevworker03/bha-tech-solutions-training/blob/main/BHA-Tech-Solutions-Month-1-Students/01-Shared-Materials/Networking-and-Debugging/Official-Reading-Links.md)
- [Required AI coding-agent courses](https://github.com/ahdevworker03/bha-tech-solutions-training/blob/main/BHA-Tech-Solutions-Month-1-Students/01-Shared-Materials/AI-Coding-Agents/Course-Links-and-Practice.md)

A detailed Week 2 day-to-day plan has been prepared **locally in the curriculum checkout** at `BHA-Tech-Solutions-Month-1-Students/02-Weekly-Plan/Week-02/Day-to-Day-Plan.md`. It is not yet published on GitHub.

## Planned work

1. **TypeScript A–J:** Practice strict checking, interfaces, types, narrowing, generics, utility types, runtime validation and React-ready type contracts.
2. **Async/Node:** Predict and observe promise/async/await order, event loop basics, timers and client aborts.
3. **Testing:** Use Node's built-in test runner and record one fail-before/pass-after regression.
4. **Reliability:** Complete lab Exercises 3–6, including safe idempotency-key retries and the in-memory restart limitation.
5. **AI tools and traffic inspection:** Begin both required freeCodeCamp courses, review one scoped agent change, and capture one sanitized approved local/test request.
6. **Project:** Build **Reliable Request Lab**, using or extending the Week 1 local mock to show success, HTTP, parse, business, network, timeout, and same-key replay outcomes.

### Files to add as the work begins

- `ts-practice/` — strict TypeScript project and solutions (with its own package/TypeScript configuration).
- `reliable-request-lab/` — Node request/retry demo and tests; reuse the supplied mock instead of creating unnecessary infrastructure.
- `day-01/` through `day-07/` — daily updates, written answers and evidence as needed.
- `weekly-report.md` — actual completion and testing evidence at the end of the week.

These paths are **planned**, not proof that implementations exist. Keep `node_modules/`, `dist/` and credentials out of Git.

**Ready for Week 3 when:** TypeScript exercises and type checks are verified, async ordering is understood, timeout versus server completion is demonstrated, a regression test is reproduced, and the official Week 2 review package is prepared.
