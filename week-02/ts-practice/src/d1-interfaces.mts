interface Address {
 City: string;
 Street?: string;
}

interface User {
  readonly ID: number;
  Name: string;
  Address: Address;
  Email?: string;
}
interface Intern extends User {
  Cohort: string;
}

const firstIntern: Intern = {
  ID: 23,
  Name: "Abdallah",
  Address: {
    City: "Tripoli",
  },
  Cohort: "A"
}

console.log(firstIntern);
