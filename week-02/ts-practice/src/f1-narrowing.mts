function formatId(id: number | string): string {
  if (typeof id === "string") {
    return id.toUpperCase();
  }

  return id.toFixed(0);
}

function displayName(name: string | null | undefined):string {
   if (name === null || name === undefined) {
    return "Guest";
  }
  return name.trim();
}

console.log(formatId("bha-1"));
console.log(formatId(4));
console.log(formatId(4.7));

console.log(displayName("Ali"));
console.log(displayName(null));
console.log(displayName(undefined));
console.log(JSON.stringify(displayName("")));