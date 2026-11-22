# BHASolution — Month 1 Training Exercises

My practical work, exercise solutions, debugging evidence, and weekly reports for the four-week BHASolution software engineering bootcamp.

**Official curriculum:** [BHA Tech Solutions Training](https://github.com/ahdevworker03/bha-tech-solutions-training). Its weekly plans, exercises, materials, and acceptance criteria are the source of truth. This repository contains **my solutions and evidence**, not copies of the course material.

## Four-week roadmap

| Week | Official scope | Work and reports | Current status |
| --- | --- | --- | --- |
| **1** | JavaScript A–J, HTTP, Git and debugging | [Week 1](week-01/README.md) | Work published; instructor review pending |
| **2** | TypeScript A–J, asynchronous JavaScript, Node testing, reliability | [Week 2](week-02/README.md) | Planned; not started |
| **3** | React foundations, state, effects and API requests | [Week 3](week-03/README.md) | Planned; not started |
| **4** | React routing, query state, forms, tests and capstone review | [Week 4](week-04/README.md) | Planned; not started |

Official weekly requirements: [Week 1](https://github.com/ahdevworker03/bha-tech-solutions-training/blob/main/BHA-Tech-Solutions-Month-1-Students/02-Weekly-Plan/Week-01/README.md) · [Week 2](https://github.com/ahdevworker03/bha-tech-solutions-training/blob/main/BHA-Tech-Solutions-Month-1-Students/02-Weekly-Plan/Week-02/README.md) · [Week 3](https://github.com/ahdevworker03/bha-tech-solutions-training/blob/main/BHA-Tech-Solutions-Month-1-Students/02-Weekly-Plan/Week-03/README.md) · [Week 4](https://github.com/ahdevworker03/bha-tech-solutions-training/blob/main/BHA-Tech-Solutions-Month-1-Students/02-Weekly-Plan/Week-04/README.md).

## Repository layout

```text
day-01/ ... day-07/        # Week 1 work at original published paths
week-01/                   # Week 1 index and submitted report
week-02/                   # TypeScript exercises and Reliable Request Lab
week-03/                   # React Issue Dashboard — Part A
week-04/                   # Part B evidence, testing and final report
```

**Week 1 compatibility:** The seven day folders remain at the repository root because their existing published links are used in the Week 1 report. Do not move them just for cosmetic consistency. Starting with Week 2, new work belongs inside the matching `week-XX/` directory.

**Week 3 → Week 4 continuity:** Week 4 extends the **same** React Issue Dashboard started in Week 3. Keep the app in one source location; Week 4 can contain reports, tests/evidence and pointers to the capstone code instead of a duplicate app.

## Getting started

The Week 1 examples use Node.js. From the repository root:

```sh
node day-03/cli/request-summary.mjs
PORT=4178 node day-04/request-explorer/server.mjs
```

Open `http://127.0.0.1:4178/` to use the Request Explorer. For the browser form, open `day-04/chapter-i/tasks.html` separately.

Future-week setup and test commands will be documented in their weekly READMEs **when those implementations exist**, rather than claiming that planned commands were tested.

## Working and verification rules

- Follow the official weekly curriculum, including assigned exercises, project requirements, labs, and evidence.
- Keep solutions, practical projects, daily updates, and weekly reports in the relevant week; keep generated artifacts and credentials out of Git.
- Record actual commands, outputs, errors, tested versions, debugger values, and limitations. Distinguish completed, pending and unverified work.
- Study the materials before attempting exercises. Use AI for instruction and review, but understand, test, and explain the final code independently.
- Use synthetic local data for networking and training applications; never publish tokens, cookies or private traffic.
- GitHub pushes, merges, branch deletion, Slack messages and submissions require explicit authorization for each action. Direct-to-`main` is allowed in this personal repository **when authorized**, not automatically.

## Progress and reports

- [Week 1 completed report](week-01/weekly-report.md)
- Week 2–4 reports will appear in `week-02/`, `week-03/`, and `week-04/` after the actual work is performed.
- The official [daily update template](https://github.com/ahdevworker03/bha-tech-solutions-training/blob/main/BHA-Tech-Solutions-Month-1-Students/03-Templates-and-Rubrics/Daily-Update.md) and [weekly report template](https://github.com/ahdevworker03/bha-tech-solutions-training/blob/main/BHA-Tech-Solutions-Month-1-Students/03-Templates-and-Rubrics/Weekly-Report.md) apply to all four weeks.

**Completion of an exercise, project, week, or instructor review must be supported by evidence.** Planning a folder does not mark its contents complete.
