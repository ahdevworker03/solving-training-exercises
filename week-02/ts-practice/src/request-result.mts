// Day 2 model + Day 3 validation of already-parsed synthetic response bodies.
// No fetch, JSON parsing, timeout or retry implementation yet.
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
  | { category: "network-or-abort"; message: string }
  | { category: "validation-error"; httpStatus: number; message: string };

// The caller supplies the actual HTTP status and the expected endpoint shape.
// Invalid JSON is handled before this boundary; transport errors are separate.
type ExpectedBody = "message" | "wait" | "operation" | "stats";

export function classifyParsedResponse(
  httpStatus: number,
  body: unknown,
  expected: ExpectedBody
): RequestResult {
  if (httpStatus < 200 || httpStatus >= 300) {
    return { category: "http-error", httpStatus, body };
  }

  const invalid = (message: string): RequestResult => ({
    category: "validation-error", httpStatus, message,
  });

  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    return invalid("Expected an object");
  }

  if ("ok" in body && body.ok === false) {
    if (!("error" in body) || typeof body.error !== "string") {
      return invalid("Expected a business error message");
    }
    return { category: "business-failure", httpStatus, body: { ok: false, error: body.error } };
  }

  if (expected === "stats") {
    if ("created" in body && typeof body.created === "number" &&
        Number.isInteger(body.created) && body.created >= 0) {
      return { category: "success", httpStatus, body: { created: body.created } };
    }
    return invalid("Expected a nonnegative integer count");
  }

  if (!("ok" in body) || body.ok !== true) {
    return invalid("Expected ok: true");
  }

  switch (expected) {
    case "message":
      if ("message" in body && typeof body.message === "string") {
        return { category: "success", httpStatus, body: { ok: true, message: body.message } };
      }
      return invalid("Expected a message");
    case "wait":
      if ("waitedMs" in body && typeof body.waitedMs === "number" &&
          Number.isFinite(body.waitedMs) && body.waitedMs >= 0) {
        return { category: "success", httpStatus, body: { ok: true, waitedMs: body.waitedMs } };
      }
      return invalid("Expected a nonnegative finite duration");
    case "operation":
      if ("id" in body && typeof body.id === "number" &&
          Number.isInteger(body.id) && body.id > 0 &&
          "name" in body && typeof body.name === "string" && body.name.trim() !== "" &&
          "state" in body && (body.state === "pending" || body.state === "completed")) {
        return {
          category: "success", httpStatus,
          body: { ok: true, id: body.id, name: body.name, state: body.state },
        };
      }
      return invalid("Expected a valid operation");
  }
}

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
    case "validation-error":
      return `Validation error: HTTP ${result.httpStatus}, ${result.message}`;
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

// Synthetic boundary cases, including a wrong endpoint shape and extra fields.
// Compare full results so unexpected acceptance or unsanitized data fails the run.
const boundaryCases: {
  label: string;
  status: number;
  body: unknown;
  expectedBody: ExpectedBody;
  result: RequestResult;
}[] = [
  { label: "message", status: 200, body: { ok: true, message: "Saved", extra: true }, expectedBody: "message", result: { category: "success", httpStatus: 200, body: { ok: true, message: "Saved" } } },
  { label: "wait", status: 200, body: { ok: true, waitedMs: 12.5 }, expectedBody: "wait", result: { category: "success", httpStatus: 200, body: { ok: true, waitedMs: 12.5 } } },
  { label: "operation", status: 201, body: { ok: true, id: 1, name: "Demo", state: "pending" }, expectedBody: "operation", result: { category: "success", httpStatus: 201, body: { ok: true, id: 1, name: "Demo", state: "pending" } } },
  { label: "completed operation", status: 200, body: { ok: true, id: 1, name: "Demo", state: "completed" }, expectedBody: "operation", result: { category: "success", httpStatus: 200, body: { ok: true, id: 1, name: "Demo", state: "completed" } } },
  { label: "stats", status: 200, body: { created: 0 }, expectedBody: "stats", result: { category: "success", httpStatus: 200, body: { created: 0 } } },
  { label: "business", status: 200, body: { ok: false, error: "Rejected", extra: true }, expectedBody: "message", result: { category: "business-failure", httpStatus: 200, body: { ok: false, error: "Rejected" } } },
  { label: "HTTP precedence", status: 422, body: { ok: false, error: "Rejected" }, expectedBody: "message", result: { category: "http-error", httpStatus: 422, body: { ok: false, error: "Rejected" } } },
  { label: "null", status: 200, body: null, expectedBody: "message", result: { category: "validation-error", httpStatus: 200, message: "Expected an object" } },
  { label: "array", status: 200, body: [], expectedBody: "message", result: { category: "validation-error", httpStatus: 200, message: "Expected an object" } },
  { label: "missing ok", status: 200, body: { message: "Saved" }, expectedBody: "message", result: { category: "validation-error", httpStatus: 200, message: "Expected ok: true" } },
  { label: "wrong endpoint shape", status: 200, body: { ok: true, waitedMs: 0 }, expectedBody: "message", result: { category: "validation-error", httpStatus: 200, message: "Expected a message" } },
  { label: "wrong message type", status: 200, body: { ok: true, message: 42 }, expectedBody: "message", result: { category: "validation-error", httpStatus: 200, message: "Expected a message" } },
  { label: "invalid business error", status: 200, body: { ok: false, error: null }, expectedBody: "message", result: { category: "validation-error", httpStatus: 200, message: "Expected a business error message" } },
  { label: "negative wait", status: 200, body: { ok: true, waitedMs: -1 }, expectedBody: "wait", result: { category: "validation-error", httpStatus: 200, message: "Expected a nonnegative finite duration" } },
  { label: "invalid operation state", status: 200, body: { ok: true, id: 1, name: "Demo", state: "wrong" }, expectedBody: "operation", result: { category: "validation-error", httpStatus: 200, message: "Expected a valid operation" } },
  { label: "zero operation ID", status: 200, body: { ok: true, id: 0, name: "Demo", state: "pending" }, expectedBody: "operation", result: { category: "validation-error", httpStatus: 200, message: "Expected a valid operation" } },
  { label: "fractional count", status: 200, body: { created: 1.5 }, expectedBody: "stats", result: { category: "validation-error", httpStatus: 200, message: "Expected a nonnegative integer count" } },
];

for (const example of boundaryCases) {
  const result = classifyParsedResponse(example.status, example.body, example.expectedBody);
  if (JSON.stringify(result) !== JSON.stringify(example.result)) {
    throw new Error(`Unexpected result for ${example.label}: ${JSON.stringify(result)}`);
  }
  console.log(`PASS ${example.label}: ${describeRequestResult(result)}`);
}
console.log(`${boundaryCases.length}/${boundaryCases.length} response boundary cases passed`);
