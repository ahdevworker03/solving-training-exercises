// G1 — Named and default exports from a single module.
export function countOpen(tasks) {
  const openTasks = tasks.filter((task) => task.done === false);
  return openTasks.length;
}

export default function formatCount(count) {
  return `${count} open task(s)`;
}
