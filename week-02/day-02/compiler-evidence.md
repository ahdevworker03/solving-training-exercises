# Day 2 — Compiler Verification Evidence

Verified on November 26, 2026, using the project's installed TypeScript 7.0.2 compiler.
The original strict tsconfig.json and all source files were copied into a temporary directory. The intentional invalid examples were tested separately, then corrected. The temporary directory was removed; the original exercise source files were not changed.

## D3 — Readonly

Intentional invalid assignment:

```ts
firstIntern.ID = 2;
firstIntern.Address.City = "Beirut";
```

Observed diagnostic (source location in temporary copy: d1-interfaces.mts:27:13):

```text
error TS2540: Cannot assign to 'ID' because it is a read-only property.
```

Type check exit code: 1.

Removed the invalid ID assignment and retained the nested City assignment:

```ts
firstIntern.Address.City = "Beirut";
console.log("Updated city:", firstIntern.Address.City);
```

Type check exit code: 0. Runtime output: `Updated city: Beirut`.

Readonly restricts assignment to the declared property at compile time. It does not recursively freeze nested objects or enforce runtime immutability.

## F3 — Discriminated union narrowing

Intentional invalid access:

```ts
function unsafeId(result: Result): string {
  return `ID: ${result.id}`;
}
```

Observed diagnostic (source location in temporary copy: f3-discriminated-unions.mts:16:24):

```text
error TS2339: Property 'id' does not exist on type 'Result'.
  Property 'id' does not exist on type '{ kind: "failed"; message: string; }'.
```

Type check exit code: 1.

Corrected access:

```ts
function safeId(result: Result): string {
  if (result.kind === "saved") return `ID: ${result.id}`;
  return `Failed: ${result.message}`;
}
```

Type check exit code: 0. Build exit code: 0.

Observed output for the saved and failed cases:

```text
ID: 23
Failed: Invalid data
```

The discriminant establishes the valid union member before accessing its case-specific properties.

## Final verification

- Temporary examples built and both executed with exit code 0.
- Original D1 and F3 source contents checked against their pre-test copies: unchanged.
- Original project: `npx --no-install tsc -p . --noEmit` exited 0.
- Evidence was captured by the assistant through remote execution, not independently reproduced by the learner.
