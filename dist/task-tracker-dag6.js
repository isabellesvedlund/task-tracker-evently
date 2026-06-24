// // Visa rubrik
// function showHeader(): void {
//   console.log(`
// ==================================
//-----------------------------
//Array med objekten task
const tasks = [];
//-----------------------------
//Lägga till en task
function addTask(name, priority) {
    const newTask = {
        name: name,
        status: "pending",
        priority: priority,
    };
    tasks.push(newTask);
}
//-----------------------------
// Visa alla tasks i ordning med sina egenskaper
function showTasks() {
    console.log("Alla tasks:");
    tasks.forEach((task) => {
        console.log(`Namn: ${task.name}`);
        console.log(`Status: ${task.status}`);
        console.log(`Prioritet: ${task.priority}`);
        console.log("---------------");
    });
}
//-----------------------------
// Visa endast pending tasks
function showPendingTasks() {
    console.log("Pending tasks:");
    tasks.forEach((task) => {
        if (task.status === "pending") {
            console.log(`Namn: ${task.name}`);
            console.log(`Status: ${task.status}`);
            console.log(`Prioritet: ${task.priority}`);
            console.log("---------------");
        }
    });
}
//-----------------------------
// Visa endast completed tasks
function showCompletedTasks() {
    console.log("Completed tasks:");
    tasks.forEach((task) => {
        if (task.status === "completed") {
            console.log(`Namn: ${task.name}`);
            console.log(`Status: ${task.status}`);
            console.log(`Prioritet: ${task.priority}`);
            console.log("---------------");
        }
    });
}
//-----------------------------
// Visa tasks med vald prioritet
function showTasksByPriority(priority) {
    console.log(`Tasks med prioritet: ${priority}`);
    tasks.forEach((task) => {
        if (task.priority === priority) {
            console.log(`Namn: ${task.name}`);
            console.log(`Status: ${task.status}`);
            console.log(`Prioritet: ${task.priority}`);
            console.log("---------------");
        }
    });
}
//-----------------------------
//--------TESTER---------------
//-----------------------------
addTask("Lära mig TypeScript", "high");
addTask("Handla", "medium");
addTask("Diska", "low");
showPendingTasks();
showCompletedTasks();
showTasksByPriority("high");
export {};
//# sourceMappingURL=task-tracker-dag6.js.map