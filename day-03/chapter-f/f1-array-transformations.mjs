// F1 — Array methods on task objects.
const tasks = [
  { id: 1, title: "Read", done: true, minutes: 10 },
  { id: 2, title: "Practise", done: false, minutes: 25 },
  { id: 3, title: "Review", done: false, minutes: 15 },
];

const titles = tasks.map((task) => task.title);
const openTasks = tasks.filter((task) => !task.done);
const taskTwo = tasks.find((task) => task.id === 2);
const hasOpen = tasks.some((task) => !task.done);
const allDone = tasks.every((task) => task.done);
const totalMinutes = tasks.reduce((total, task) => total + task.minutes, 0);

tasks.forEach((task) => console.log(`task title is ${task.title}`));
const missingTask = tasks.find((task) => task.id === 99);

console.log("Titles:", titles);
console.log("Open tasks:", openTasks);
console.log("Task ID 2:", taskTwo);
console.log("Has unfinished tasks:", hasOpen);
console.log("All done:", allDone);
console.log("Total minutes:", totalMinutes);
console.log("Missing ID 99:", missingTask?.id);
