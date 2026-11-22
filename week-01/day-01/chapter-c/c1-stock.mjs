const stock = 0;

if (stock > 0) {
  console.log("Available");
} else {
  console.log("Sold out");
}

const stockAvailability = stock > 0 ? "Available" : "Sold out";
console.log(stockAvailability);
