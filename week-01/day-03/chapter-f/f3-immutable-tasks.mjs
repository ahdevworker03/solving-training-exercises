// F3 — Immutable array update, filter, destructuring, and rest.
const tasks = [
  { id: 1, title: "Read", done: true, minutes: 10 },
  { id: 2, title: "Practise", done: false, minutes: 25 },
  { id: 3, title: "Review", done: false, minutes: 15 },
];

const updatedTasks = tasks.map((task) =>
  task.id === 2 ? { ...task, done: true } : task,
);
const remainingTasks = updatedTasks.filter((task) => task.id !== 1);
const [firstTask, ...otherTasks] = remainingTasks;
const firstTitle = firstTask.title;

console.log("Original task 2 done:", tasks[1].done); // false
console.log("Updated task 2 done:", updatedTasks[1].done); // true
console.log("Remaining count:", remainingTasks.length); // 2
console.log("First title:", firstTitle); // Practise
console.log("Other tasks:", otherTasks);
