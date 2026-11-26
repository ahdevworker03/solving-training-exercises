type Task = {
id: number,
title: string,
}

type OwnedTask = Task & {
  ownerId: number,
}
const ownedTask: OwnedTask = {
  id: 1,
  title: "Softwares",
  ownerId: 23,
}
function printObject(task: { title: string }): void {
  console.log(task.title);
}
printObject(ownedTask);