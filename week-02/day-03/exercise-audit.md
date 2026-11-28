# TypeScript A–J — 40-item coverage audit

Reviewed November 28, 2026 against the official exercises and local source, written answers and current runtime evidence. **Pass** means the reviewed deliverable meets the curriculum item; assisted/guided labels identify corrections or verification supported by ChatGPT. This is not an independent learner assessment or 40 automated tests.

Evidence: [Day 1 answers](../day-01/written-answers.md), [Day 2 answers](../day-02/written-answers.md), [Day 2 diagnostics](../day-02/compiler-evidence.md), [Day 3 answers](written-answers.md), [fresh verification](verification-evidence.md), [source](../ts-practice/src/).

| Item | Status | Evidence |
| --- | --- | --- |
| A1 | Pass | a1-product.mts; emitted JS inspected, annotations erased |
| A2 | Pass (assisted) | TS2322 reproduced and corrected; Day 1 answer explains stale emit |
| A3 | Pass | Day 1 written answer distinguishes execution and configured type check |
| A-K | Pass | Day 1 answers: compile/runtime, noEmitOnError, extra strict flag |
| B1 | Pass | b1-product.mts; typed object and tuple position |
| B2 | Pass | b2-arrays.mts; Empty fallback; TS2322 reproduced; unknown explanation |
| B3 | Pass | b3-types.mts; nullable ID, void logger, never thrower; written explanation |
| B-K | Pass | Day 1 answers: primitive string, tuple, number limits |
| C1 | Pass | Day 1 recorded prediction: number, literal open, widened property |
| C2 | Pass | c2-types.mts; draft and absent description, nullable discount |
| C3 | Pass (assisted) | c3-optional.mts; omission and explicit undefined alternative; TS2375 reproduced |
| C-K | Pass | Day 1 answers: union, annotations, optional reads |
| D1 | Pass | d1-interfaces.mts; readonly ID and extended Intern |
| D2 | Pass | d2-intersections.mts; structural assignment and Day 2 explanation |
| D3 | Pass (assisted) | Day 2 compiler-evidence.md: TS2540 and writable nested city |
| D-K | Pass | Day 2 answers: unions, merging, no runtime interface |
| E1 | Pass | e1-functions.mts; default and explicit currencies |
| E2 | Pass | e2-callbacks.mts; trimmed title and inferred callback parameter |
| E3 | Pass (assisted) | e3-predicates.mts; boolean output; Day 2 corrected callback reasoning |
| E-K | Pass | Day 2 reviewed signatures, inference and default/optional parameters |
| F1 | Pass | f1-narrowing.mts; uppercase, numeric label, nullish fallback, empty string preserved |
| F2 | Pass | f2-narrowing.mts; contact and unknown error guards |
| F3 | Pass (assisted) | f3-discriminated-unions.mts; both outputs and Day 2 TS2339 evidence |
| F-K | Pass | Day 2 answers: null and property presence |
| G1 | Pass (assisted) | g1-generics.mts; added official last, retained learner second; numbers/users/empty |
| G2 | Pass | g2-generic-types.mts; both boxes and string box array |
| G3 | Pass | g3-promise-types.mts; aliases only, Day 3 written explanation |
| G-K | Pass (guided) | Day 3 answers; generic constraint TS2339 and corrected compile |
| H1 | Pass | h1-utility-types.mts; three correct derived values |
| H2 | Pass (assisted) | h2-record-readonly.mts; same object, Laptop observed, TS2540 |
| H3 | Pass | h3-omit-runtime.mts; synthetic secret remains on original; new public object excludes it |
| H-K | Pass | Day 3 answers; missing Record key TS2741 |
| I1 | Pass | i1-parse-product.mts; fresh trimmed object and positive/nonnegative rules |
| I2 | Pass (assisted verification) | i2-verify-product.mts; 7 official + 3 additional outcome checks |
| I3 | Pass (assisted) | i3-assertion-boundary.mts; rejects wrong name, valid uppercase; written model distinction |
| I-K | Pass (guided) | Day 3 answers; runtime evidence through guards |
| J1 | Pass | j1-product-list-props.mts; two products, selects existing ID 2 |
| J2 | Pass | j2-product-list-state.mts; nullable selected ID, three state outputs |
| J3 | Pass (guided) | Day 3 written explanation of passing callback and TSX setup |
| J-K | Pass | Day 3 answers; props, mutation, state vs execution |

All 40 items accounted for; none is missing from the reviewed deliverables. Independent reproduction/explanation of assisted work and instructor acceptance remain pending. Historical per-chapter compiler runs cannot all be independently reconstructed; the complete final strict project and separate diagnostics were checked on November 28.
