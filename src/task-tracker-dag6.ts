// // Visa rubrik
// function showHeader(): void {
//   console.log(`
// ==================================

//           Task Tracker

// ==================================
// `);
// }

//----------------------------------
//---------- DEFINIERAR TYPER-------
//----------------------------------

type TaskStatus = "pending" | "completed";

type TaskPriority = "low" | "medium" | "high";

type Task = {
  id: number;
  name: string;
  status: TaskStatus;
  priority: TaskPriority;
  description?: string;
  notes?: string;
};

//---------------------------------
//--------ARRAY MED OBJEKT TASK----
//---------------------------------
let tasks: Task[] = [];
let nextId = 1;

//-----------------------------
//-- HÄMTAR ELEMENT FRÅN HTML--
const title = document.querySelector("#title") as HTMLHeadingElement;
title.textContent = "Mina Tasks";

const app = document.querySelector("#app");

const taskInput = document.querySelector("#task-input") as HTMLInputElement;

const priorityInput = document.querySelector(
  "#priority-input",
) as HTMLSelectElement;

const taskForm = document.querySelector("#task-form") as HTMLFormElement;

const errorMessage = document.querySelector(
  "#error-message",
) as HTMLParagraphElement;

function handleSubmit(event: SubmitEvent): void {
  event.preventDefault();

  function handleSubmit(event: SubmitEvent): void {
    event.preventDefault();

    const taskName = taskInput.value.trim();

    if (taskName === "") {
      errorMessage.textContent = "Task name is required.";
      return;
    }
    errorMessage.textContent = "";
    const priority = priorityInput.value as TaskPriority;

    addTask(taskName, priority);
    taskForm.reset();
    taskForm.addEventListener("submit", handleSubmit);
  }
}

taskForm.addEventListener("submit", handleSubmit);

//-----------------------------
//--------ADD TASK-------------
function addTask(name: string, priority: TaskPriority): void {
  const newTask: Task = {
    id: nextId,
    name: name,
    status: "pending",
    priority: priority,
  };

  tasks.push(newTask);
  nextId++;
  renderTasks();
}

//-----------------------------
//----SHOW SPECIFIC PRIORITY---
//function showTasksByPriority(priority: TaskPriority): void {
//console.log(`Tasks med prioritet: ${priority}`);

//tasks.forEach((task) => {
//if (task.priority === priority) {
//printTask(task);
//}
// });
//}

//----------------------------------
//------TOGGLE PENDING-COMPLETED----
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

//----------------------------------
//------TOGGLE TASK BY ID-----------
function toggleTask(id: number): void {
  for (const task of tasks) {
    if (task.id === id) {
      if (task.status === "pending") {
        task.status = "completed";
      } else {
        task.status = "pending";
      }
    }
  }

  renderTasks();
}

//----------------------------------
//------DELETE TASK BY ID-----------
function deleteTask(id: number): void {
  tasks = tasks.filter((task) => task.id !== id);

  renderTasks();
}

//-----------------------------
//---RENDER ONE TASK CARD------
function renderTask(task: Task): HTMLDivElement {
  const card = document.createElement("div");
  card.classList.add("task");
  if (task.status === "completed") {
    card.classList.add("completed");
  }

  if (task.priority === "high") {
    card.classList.add("high-priority");
  }

  const title = document.createElement("h3");
  title.textContent = task.name;

  const status = document.createElement("p");
  status.textContent = `Status: ${task.status}`;

  const priority = document.createElement("p");
  priority.textContent = `Prioritet: ${task.priority}`;

  const completeButton = document.createElement("button");
  completeButton.classList.add("btn");
  completeButton.textContent = task.status === "pending" ? "Complete" : "Undo";
  completeButton.addEventListener("click", () => {
    toggleTask(task.id);
  });
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("btn");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    deleteTask(task.id);
  });
  card.append(title, status, priority, completeButton, deleteButton);

  return card;
}

//-----------------------------
//---RENDER TASKS FOR WEBSITE--
function renderTasks(): void {
  if (app) {
    app.innerHTML = "";
  }

  for (const task of tasks) {
    const card = renderTask(task);

    app?.append(card);
  }
}

//-----------------------------
//------------TESTS------------
//-----------------------------
//addTask("Lära mig TypeScript", "high");
//addTask("Handla", "medium");
//addTask("Diska", "low");

renderTasks();
