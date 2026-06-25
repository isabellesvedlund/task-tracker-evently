// // Visa rubrik
// function showHeader(): void {
//   console.log(`
// ==================================

//           Task Tracker

// ==================================
// `);
// }

//-----------------------------
//Definierar typen Task
type Task = {
  name: string;
  status: "pending" | "completed";
  priority: "low" | "medium" | "high";
  description?: string;
  notes?: string;
};

//-----------------------------
//Array med objekten task
const tasks: Task[] = [];

//-----------------------------
//Lägga till en task
function addTask(name: string, priority: "low" | "medium" | "high"): void {
  const newTask: Task = {
    name: name,
    status: "pending",
    priority: priority,
  };

  tasks.push(newTask);
}

//-----------------------------
// Skriver ut en task
function printTask(task: Task): void {
  console.log(`Namn: ${task.name}`);
  console.log(`Status: ${task.status}`);
  console.log(`Prioritet: ${task.priority}`);
  console.log("---------------");
}

//-----------------------------
// Visa alla tasks i ordning med sina egenskaper
function showTasks(): void {
  console.log("Alla tasks:");

  tasks.forEach((task) => {
    printTask(task);
  });
}

//-----------------------------
// Visa endast pending tasks
function showPendingTasks(): void {
  console.log("Pending tasks:");

  tasks.forEach((task) => {
    if (task.status === "pending") {
      printTask(task);
    }
  });
}

//-----------------------------
// Visa endast completed tasks
function showCompletedTasks(): void {
  console.log("Completed tasks:");

  tasks.forEach((task) => {
    if (task.status === "completed") {
      printTask(task);
    }
  });
}

//-----------------------------
// Visa tasks med vald prioritet
function showTasksByPriority(priority: "low" | "medium" | "high"): void {
  console.log(`Tasks med prioritet: ${priority}`);

  tasks.forEach((task) => {
    if (task.priority === priority) {
      printTask(task);
    }
  });
}

//-----------------------------
// Markera en task som completed
function completeTask(taskName: string): void {
  const foundTask = tasks.find((task) => task.name === taskName);

  if (foundTask) {
    foundTask.status = "completed";
  } else {
    console.log("Tasken hittades inte.");
  }
}

//-----------------------------
// Växla mellan pending och completed
function toggleTaskStatus(taskName: string): void {
  const foundTask = tasks.find((task) => task.name === taskName);

  if (foundTask) {
    if (foundTask.status === "pending") {
      foundTask.status = "completed";
    } else {
      foundTask.status = "pending";
    }
  } else {
    console.log("Tasken hittades inte.");
  }
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

completeTask("Handla");
showTasks();
