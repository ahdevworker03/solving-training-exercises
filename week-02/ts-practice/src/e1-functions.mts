function formatPrice(cents: number, currency: string = "USD"): string {
  return `${cents /100} ${currency}`;
}

console.log(formatPrice(2500));
console.log(formatPrice(5000, "EUR"));
console.log(formatPrice(1250));
