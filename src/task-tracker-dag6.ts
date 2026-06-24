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

function showTasks(): void {
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
