type Result =
  | { kind: "saved"; id: number }
  | { kind: "failed"; message: string };

function showResult(result: Result): string {
  if(result.kind === "saved") {
    return `${result.kind}: ${result.id}`;
  }
  return `${result.kind}: ${result.message}`;
}

console.log(showResult({ kind: "saved", id: 23 }));
console.log(showResult({ kind: "failed", message: "Invalid data" }));
