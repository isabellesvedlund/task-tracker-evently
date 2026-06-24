// // Visa rubrik
// function showHeader(): void {
//   console.log(`
// ==================================

//           Task Tracker

// ==================================
// `);
// }

//Definierar typen Task
type Task = {
  name: string;
  status: "pending" | "completed";
  priority: "low" | "medium" | "high";
  description?: string;
  notes?: string;
};

//Array med objekten task
const tasks: Task[] = [];

//Lägga till en task
function addTask(name: string, priority: "low" | "medium" | "high"): void {
  const newTask: Task = {
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
