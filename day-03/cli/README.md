# Day 3 — Request Summary CLI (first draft)

This introductory Node.js script processes synthetic HTTP request records; it does not send network requests or use live data.

From the repository root, run:

```sh
node day-03/cli/request-summary.mjs
```

- `map()` builds readable summaries.
- `filter()` selects HTTP status codes 400–599.
- `find()` looks up the record with ID 2.
- `summarize(record)` is a reusable transformation function.
- Empty arrays and missing fields are handled without throwing.

Expected missing-field output: `Request 4: PATCH unknown (duration unknown)`.

This is the Day 3 draft. Later Week 1 lessons add browser/network behavior and final CLI checks.
