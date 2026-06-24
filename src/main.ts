//----------------------------------------------
//----------------------------------------------
//----------------------------------------------

// Definierar Task-objekt
type Task = {
  name: string;
  completed: boolean;
  priority: number;
  description: string;
};

//Skapar varje objekt i typen task
const task1: Task = {
  name: "Lära mig TypeScript",
  completed: false,
  priority: 5,
  description: "Lära mig grunderna i TypeScript.",
};

const task2: Task = {
  name: "Handla",
  completed: false,
  priority: 2,
  description: "Köpa mjölk och smör.",
};
const task3: Task = {
  name: "Tvätta",
  completed: false,
  priority: 3,
  description: "Tvätta kläder och bädda sängen",
};

const task4: Task = {
  name: "Diska",
  completed: false,
  priority: 1,
  description: "Plocka ur och i diskmaskinen och handdiska resten",
};

const task5: Task = {
  name: "Plugga",
  completed: false,
  priority: 5,
  description: "Slutför programmeringsuppgifterna och andra övningar",
};

//Skapar en array med objekt av typen tasks, och lägger till samtliga skapade objekt
const tasks: Task[] = [task1, task2, task3, task4, task5];

// Visa rubrik
function showHeader(): void {
  console.log(`
==================================

          Task Tracker

==================================
`);
}

//Lägga till en task och lägga den i arrayen
function addTask(taskName: string): void {
  const newTask: Task = {
    name: taskName,
    completed: false,
    priority: 1,
    description: "",
  };

  tasks.push(newTask);
}

// Visa alla tasks i en lista
function showTasks(): void {
  console.log("Alla tasks:");

  tasks.forEach((task) => {
    console.log(
      `${task.name} | Klar: ${task.completed} | Prioritet: ${task.priority}`,
    );
  });
}

// Visa avklarade tasks från arrayen
function showCompletedTasks(): void {
  console.log("Avklarade tasks:");

  tasks.forEach((task) => {
    if (task.completed) {
      console.log(task.name);
    }
  });
}
// Visa aavklarade tasks från arrayen
function showPendingTasks(): void {
  console.log("Ej avklarade tasks:");

  tasks.forEach((task) => {
    if (!task.completed) {
      console.log(task.name);
    }
  });
}

// Slutför en task
function completeTask(taskName: string): void {
  const foundTask = tasks.find((task) => task.name === taskName);

  if (foundTask) {
    foundTask.completed = true;
  } else {
    console.log("Tasken hittades inte.");
  }
}

// Visa antal tasks, avklarade och oavklarade tasks
function showStatistics(): void {
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter((task) => task.completed).length;

  const pendingTasks = tasks.filter((task) => !task.completed).length;

  console.log("Statistik:");
  console.log(`Totalt antal tasks: ${totalTasks}`);
  console.log(`Avklarade tasks: ${completedTasks}`);
  console.log(`Ej avklarade tasks: ${pendingTasks}`);
}

showHeader();

//completeTask("Träna");

showTasks();
showCompletedTasks();
showPendingTasks();
showStatistics();
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
// for (let i = 0; i < tasks.length; i++) {
//   console.log(`${i + 1}. ${tasks[i]}`);
// }

// function showTasks(): void {
//   tasks.forEach((task) => {
//     console.log(task);
//   });
// }

// function showTaskCount(): void {
//   console.log(`Antal uppgifter: ${tasks.length}`);
// }

// function addTask(task: string): void {
//   tasks.push(task);
//   console.log(`Uppgift ${task} har lagts till.`);
// }

// showHeader();
// showTasks();
// showTaskCount();
// //addTask("Laga mat");
// //addTask("Städa");
// //showHeader();
// //showTasks();
// //showTaskCount();
