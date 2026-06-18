console.log("TaskTracker");
function showHeader(): void {
  console.log(`
==================================

          Task Tracker

==================================
`);
}

const tasks = [
  "Lära mig TypeScript",
  "Träna",
  "Handla",
  "Tvätta",
  "Plugga",
  "Borsta Tänderna",
];

for (let i = 0; i < tasks.length; i++) {
  console.log(`${i + 1}. ${tasks[i]}`);
}

function showTasks(): void {
  tasks.forEach((task) => {
    console.log(task);
  });
}

function showTaskCount(): void {
  console.log(`Antal uppgifter: ${tasks.length}`);
}

function addTask(task: string): void {
  tasks.push(task);
  console.log(`Uppgift ${task} har lagts till.`);
}

showHeader();
showTasks();
showTaskCount();
//addTask("Laga mat");
//addTask("Städa");
//showHeader();
//showTasks();
//showTaskCount();
