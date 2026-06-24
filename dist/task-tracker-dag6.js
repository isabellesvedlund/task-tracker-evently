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
function showTasks() {
    console.log("Alla tasks:");
    tasks.forEach((task) => {
        console.log(`Namn: ${task.name}`);
        console.log(`Status: ${task.status}`);
        console.log(`Prioritet: ${task.priority}`);
        console.log("---------------");
    });
}
//--------TESTER---------------
addTask("Lära mig TypeScript", "high");
addTask("Handla", "medium");
addTask("Diska", "low");
console.log(tasks);
export {};
//# sourceMappingURL=task-tracker-dag6.js.map