console.log("TaskTracker");
function showHeader() {
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
function showTasks() {
    tasks.forEach((task) => {
        console.log(task);
    });
}
function showTaskCount() {
    console.log(`Antal uppgifter: ${tasks.length}`);
}
function addTask(task) {
    tasks.push(task);
    console.log(`Uppgift ${task} har lagts till.`);
}
showHeader();
showTasks();
showTaskCount();
export {};
//addTask("Laga mat");
//addTask("Städa");
//showHeader();
//showTasks();
//showTaskCount();
//# sourceMappingURL=main.js.map