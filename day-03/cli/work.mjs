// const tasks = [
//   { id: 1, title: "Read", done: true },
//   { id: 2, title: "Practice", done: false },
// ];

// console.log(tasks[0].title);
// console.log(tasks[1].done);

// const numbers = [1, 2, 3, 4];

// const doubled = numbers.map((n) => n * 2);
// console.log(doubled); // [2, 4, 6, 8]

// const even = numbers.filter((n) => n % 2 === 0);
// console.log(even); // [2, 4]

// [ ] Use map() to extract all task titles
// [ ] Use filter() to get unfinished tasks
// [ ] Use find() to retrieve the task with ID 2
// [ ] Use some() to check whether any task is unfinished
// [ ] Use every() to check whether all tasks are completed
// [ ] Use reduce() to calculate the total minutes
// [ ] Use forEach() to print each task title
// [ ] Safely handle a lookup for missing task ID 99

// const tasks = [
//   { id: 1, title: "Read", done: true, minutes: 10 },
//   { id: 2, title: "Practise", done: false, minutes: 25 },
//   { id: 3, title: "Review", done: false, minutes: 15 },
// ];

// const mapTask = tasks.map((task) => task.title);
// const filterTask = tasks.filter((task) => !task.done);
// const findTask = tasks.find((task) => task.id === 2);
// const someTask = tasks.some((task) => !task.done);
// const everyTask = tasks.every((task) => task.done);
// const reduceTask = tasks.reduce((total, task) => {
//   return total + task.minutes;
// }, 0);
// const forEachTask = tasks.forEach((task) => {
//   console.log(`task title is ${task.title}`);
// });
// const missing99 = tasks.find((task) => task.id === 99);

// // console.log(mapTask);
// console.log(filterTask);
// // console.log(findTask);
// console.log(someTask);
// // console.log(everyTask);
// // console.log(reduceTask);
// // console.log(forEachTask);
// // console.log(missing99?.id);

// const a = {
//   profile: { city: "Beirut" },
// };

// const b = {
//   ...a,
//   profile: { ...a.profile },
// };

// b.profile.city = "Tripoli";

// console.log(a.profile.city);
// console.log(b.profile.city);

// Immutable update: Create a new array called updatedTasks in which task ID 2 has done: true. Keep the original tasks array and its objects unchanged.
// Remove a task: Create another array called remainingTasks containing all updated tasks except task ID 1.
// Destructuring: Extract the first remaining task's title into a variable called firstTitle.
// Rest syntax: Collect the other remaining task objects into an array called otherTasks.
// Print the results to demonstrate that the original data was preserved.

// const tasks = [
//   { id: 1, title: "Read", done: true, minutes: 10 },
//   { id: 2, title: "Practise", done: false, minutes: 25 },
//   { id: 3, title: "Review", done: false, minutes: 15 },
// ];

// const updatedTasks = tasks.map((task) =>
//   task.id === 2 ? { ...task, done: true } : task,
// );
// const remainingTasks = updatedTasks.filter((task) => task.id !== 1);
// const [firstTask] = remainingTasks;

// const firstTitle = firstTask.title;

// const [first, ...otherTasks] = remainingTasks;

// console.log(updatedTasks);
// console.log(remainingTasks);
// console.log(firstTitle);
// console.log(otherTasks);
// const product = {
//   name: "Pen",
//   priceCents: 100,
// };

// const key = "priceCents";

// console.log(product[key]);
// console.log(product.key);
// function sum(...numbers) {
//   return numbers.reduce((total, number) => {
//     return total + number;
//   }, 0);
// }

// console.log(sum(1, 2, 3)); // 6
// console.log(sum(10, 20)); // 30
// console.log(sum()); // 0
// const oldState = {
//   user: { name: "Ali" },
// };

// // Create new objects instead of modifying oldState
// const newState = {
//   ...oldState,
//   user: { ...oldState.user, name: "Omar" },
// };

// console.log(newState);

// const oldState = {
//   user: { name: "Ali", age: 20 },
//   theme: "dark",
//   loggedIn: true,
// };

// const newStateAge = {
//   ...oldState,
//   user: {...oldState.user, age: 23 },
// };
// const newStateTheme = {
//   ...oldState,
//   theme: "light",
// }
// const newStateStatus = {
//   ...oldState,
//   loggedIn: false,
// };
// console.log(newStateAge);
// console.log(newStateTheme);
// console.log(newStateStatus);


