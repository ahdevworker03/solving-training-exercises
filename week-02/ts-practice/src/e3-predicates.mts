type Validator = (title: string) => boolean;

const isNonEmptyTitle: Validator = (title) => title.length > 0;

console.log(isNonEmptyTitle("Learn TypeScript"));
console.log(isNonEmptyTitle(""));