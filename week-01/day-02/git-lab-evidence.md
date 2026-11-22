# Day 02 — Git Practice Lab Evidence (Tasks 1–3)

**Workspace:** Separate disposable local repository: `/home/ahdevworker03/git-practice-day02`.
**Evidence source:** Terminal outputs provided during the study session. The local repository was not independently inspected by this assistant.

## Task 1 — Initialize

- `git init -b main`; `git status` reported `main`, no commits, untracked `README.md` and `.gitignore`.
- `git branch --show-current` returned `main`, `git remote -v` returned no remotes, and `ls -la` showed `.git`.

## Task 2 — Diff

- Appended `Learning Git status, diff, and staging.` to `README.md`.
- `git diff` initially showed nothing because README was untracked.
- `git add -N README.md` allowed `git diff` to show the four README lines as additions.
- `git status` showed README unstaged and `.gitignore` untracked.

## Task 3 — Stage and commit

- `git add README.md` staged only README; `git diff --staged` showed its content.
- `git log --oneline -1` reported commit `aa6598b` on `main`.
- Final `git status` still showed `.gitignore` untracked.
- The trainee correctly explained the staging area as the selection of changes for the next commit.

Only Tasks 1–3 were assigned for Day 2. Git practice files and history remain outside the training repository. Tasks 4–5 are assigned for Day 3.
