console.log("TaskTracker");
function showHeader() {
    console.log(`
==================================

          Task Tracker

==================================
`);
}
showHeader();
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
console.log(`Antal uppgifter: ${tasks.length}`);
export {};
//function showTasks(): {
//   tasks.forEach(task => {
//   console.log(task);
// })}
//}
//# sourceMappingURL=main.js.map