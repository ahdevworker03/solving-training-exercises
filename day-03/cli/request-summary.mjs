// Day 3 CLI first draft: synthetic HTTP request records only (no network calls).
const requests = [
  { id: 1, method: "GET", status: 200, durationMs: 120 },
  { id: 2, method: "POST", status: 400, durationMs: 85 },
  { id: 3, method: "GET", status: 500, durationMs: 200 },
];

function summarize(record) {
  const duration = record?.durationMs == null
    ? "duration unknown"
    : `${record.durationMs}ms`;
  return `Request ${record?.id ?? "unknown"}: ${record?.method ?? "unknown"} ${record?.status ?? "unknown"} (${duration})`;
}

const summaries = requests.map(summarize);
const httpErrors = requests.filter(
  (record) => record.status >= 400 && record.status <= 599,
);
const requestWithIdTwo = requests.find((record) => record.id === 2);

console.log("Summaries:", summaries);
console.log("HTTP errors:", httpErrors);
console.log("Request ID 2:", requestWithIdTwo);
console.log("Empty array summaries:", [].map(summarize));
console.log("Missing field summary:", summarize({ id: 4, method: "PATCH" }));
