// // Visa rubrik
// function showHeader(): void {
//   console.log(`
// ==================================
//Array med objekten task
const tasks = [];
//Lägga till en task
function addTask(name, priority) {
    const newTask = {
        name: name,
        status: "pending",
        priority: priority,
    };
    tasks.push(newTask);
}
//Lägger till och skriver ut tasks
addTask("Lära mig TypeScript", "high");
addTask("Handla", "medium");
addTask("Diska", "low");
console.log(tasks);
export {};
//# sourceMappingURL=task-tracker-dag6.js.map