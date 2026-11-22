// F2 — Copy both levels to avoid mutating the original nested object.
const a = { profile: { city: "Beirut" } };
const b = { ...a, profile: { ...a.profile } };

b.profile.city = "Tripoli";

console.log(a.profile.city); // Beirut
console.log(b.profile.city); // Tripoli
console.log(a.profile === b.profile); // false: independent nested objects
