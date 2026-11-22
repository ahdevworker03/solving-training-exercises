// G1 — Default imported as describeCount; named import keeps its name.
import describeCount, { countOpen } from "./tasks.mjs";

const tasks = [
  { id: 1, title: "Read", done: true },
  { id: 2, title: "Practise", done: false },
  { id: 3, title: "Review", done: false },
];

const countOfTasks = countOpen(tasks);
console.log(describeCount(countOfTasks)); // 2 open task(s)
