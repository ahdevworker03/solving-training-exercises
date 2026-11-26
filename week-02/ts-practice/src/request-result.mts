// Day 2 project preparation: synthetic, already-known local values only.
// No fetch, JSON parsing, runtime validation or retry implementation yet.
type SuccessBody =
  | { ok: true; message: string }
  | { ok: true; waitedMs: number }
  | { ok: true; id: number; name: string; state: "pending" | "completed" }
  | { created: number };

export type RequestResult =
  | { category: "success"; httpStatus: number; body: SuccessBody }
  | { category: "http-error"; httpStatus: number; body: unknown }
  | { category: "parse-error"; httpStatus: number; raw: string }
  | { category: "business-failure"; httpStatus: number; body: { ok: false; error: string } }
  | { category: "network-or-abort"; message: string };

function describeRequestResult(result: RequestResult): string {
  switch (result.category) {
    case "success":
      return `Success: HTTP ${result.httpStatus}`;
    case "http-error":
      return `HTTP error: ${result.httpStatus}`;
    case "parse-error":
      return `Parse error: HTTP ${result.httpStatus}, invalid JSON`;
    case "business-failure":
      return `Business failure: ${result.body.error}`;
    case "network-or-abort":
      return `Network/abort: ${result.message}`;
  }
}

// These examples are constructed locally, not responses from a running server.
const examples: RequestResult[] = [
  { category: "success", httpStatus: 200, body: { ok: true, message: "Saved" } },
  { category: "http-error", httpStatus: 422, body: { ok: false, error: "Validation failed" } },
  { category: "parse-error", httpStatus: 200, raw: '{"broken":' },
  { category: "business-failure", httpStatus: 200, body: { ok: false, error: "Rejected" } },
  { category: "network-or-abort", message: "No response received" },
];

for (const result of examples) {
  console.log(describeRequestResult(result));
}
