function second<T>(element: T[]): T | undefined {
  return element[1];
}

type User = {
  id: number;
  name: string;
};
const numbers: number[] = [10, 20, 30];

const users: User[] = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Omar" }
];

const secondUser = second<User>(users);

console.log(secondUser?.name);

console.log(second<number>(numbers));

console.log(second<number>([]));

const result = second(numbers);

console.log(result);

// G1 official task; second<T> above is additional learner practice.
function last<T>(items: T[]): T | undefined {
  return items[items.length - 1];
}

console.log(last(numbers));
console.log(last(users)?.name);
console.log(last<number>([]));
console.log(second(["first", "second"]));
console.log(second([10]));
