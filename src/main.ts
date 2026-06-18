console.log("TaskTracker");
function taskTracker(): void {
  console.log(`
==================================

          Task Tracker

==================================
`);
}
taskTracker();

const tasks: string[] = [
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

console.log(`Antal uppgifter: ${tasks.length}`);
