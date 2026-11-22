# Day 03 — Git Practice Lab Evidence

Source: terminal outputs shared during the guided learning session. The laptop's local repository was not independently accessed in this handoff.

## Task 4 — Branch, commit, and merge

The exercise was conducted in the actual `solving-training-exercises` repository, not the originally suggested disposable repository. The learner explicitly chose to keep working there.

1. Created `practice/day03-task4` from local `main`.
2. Changed `README.md` to `Day 3: Practicing Git branches and merges.`.
3. Created commit `7fa3fa5` and merged into `main` with `--no-ff` to create commit `8a51021`.
4. Verified `git log --graph --oneline --all` and clean tracked changes; `format.mjs`, `main.mjs` and `work.mjs` were untracked at that point.
5. Both Task 4 commits were present on remote `main` when Day 3 handoff was inspected.

## Task 5 — Reproduce and resolve a conflict

1. Created `practice/day03-task5-a` from local `main` and modified the same README line; commit `2a71ec4`.
2. Created `practice/day03-task5-b` from local `main` and made a competing edit; commit `14d77d9`.
3. Merging branch A into B produced a real `CONFLICT (content)` in README.
4. Resolved the markers and used `Day 3: Practicing conflict resolution on branches A and B.` as the final line.
5. Local Git graph showed merge commit `c3757c0`, with parents on branches A and B. The final `git status` showed no unresolved paths and `cat README.md` printed the resolved line.

**Publication update (November 22, 2026):** Task 5's conflict-resolution branch was subsequently merged into `main` by the repository owner during Week 1 consolidation. The exercise commits remain available in `main` history. The temporary practice branches were deleted afterward.
