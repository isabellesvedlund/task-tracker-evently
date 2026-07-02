import type { Task, TaskPriority } from "./types.js";

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
const descriptionInput = document.querySelector(
  "#description-input",
) as HTMLTextAreaElement;
const descriptionCount = document.querySelector(
  "#description-count",
) as HTMLParagraphElement;
const priorityInput = document.querySelector(
  "#priority-input",
) as HTMLSelectElement;

const taskForm = document.querySelector("#task-form") as HTMLFormElement;

const errorMessage = document.querySelector(
  "#error-message",
) as HTMLParagraphElement;

//-----------------------------
//--------VALIDATE TASK--------
function validateTaskName(taskName: string): string {
  if (taskName === "") {
    return "Task name is required.";
  }

  if (taskName.length < 3) {
    return "Task name must be at least 3 characters.";
  }

  if (taskName.length > 40) {
    return "Task name must be max 40 characters.";
  }

  return "";
}

//-----------------------------
//--------HANDLE SUBMIT--------
function handleSubmit(event: SubmitEvent): void {
  event.preventDefault();

  const taskName = taskInput.value.trim();

  const validationError = validateTaskName(taskName);

  if (validationError !== "") {
    errorMessage.textContent = validationError;
    return;
  }

  errorMessage.textContent = "";

  const priority = priorityInput.value as TaskPriority;

  const description = descriptionInput.value.trim();
  if (description.length > 100) {
    errorMessage.textContent = "Description must be max 100 characters.";
    return;
  }

  addTask(taskName, priority, description);

  taskForm.reset();
  descriptionCount.textContent = "0 / 100";
}
taskForm.addEventListener("submit", handleSubmit);
descriptionInput.addEventListener("input", () => {
  descriptionCount.textContent = `${descriptionInput.value.length} / 100`;
});

//-----------------------------
//--------ADD TASK-------------
function addTask(
  name: string,
  priority: TaskPriority,
  description?: string,
): void {
  const newTask: Task = {
    id: nextId,
    name,
    status: "pending",
    priority,
  };

  if (description) {
    newTask.description = description;
  }

  tasks.push(newTask);
  nextId++;
  saveTasks();
  renderTasks();
}

//-----------------------------
//--------SAVE TASKS-----------
function saveTasks(): void {
  const json = JSON.stringify(tasks);
  localStorage.setItem("tasks", json);
  saveLastUpdated();
}

//-----------------------------
//-----SAVE LAST UPDATED-------
function saveLastUpdated(): void {
  const now = new Date().toLocaleString("sv-SE");
  localStorage.setItem("lastUpdated", now);
}

//-----------------------------
//--------LOAD TASKS------------
function loadTasks(): void {
  const json = localStorage.getItem("tasks");

  if (json === null) {
    return;
  }

  const loadedTasks = JSON.parse(json) as Task[];
  tasks = loadedTasks;

  if (tasks.length > 0) {
    nextId = Math.max(...tasks.map((task) => task.id)) + 1;
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
  saveTasks();
  renderTasks();
}

//----------------------------------
//------DELETE TASK BY ID-----------
function deleteTask(id: number): void {
  tasks = tasks.filter((task) => task.id !== id);
  saveTasks();
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

  if (task.priority === "medium") {
    card.classList.add("medium-priority");
  }

  if (task.priority === "low") {
    card.classList.add("low-priority");
  }

  const title = document.createElement("h3");
  title.textContent = task.name;

  const status = document.createElement("p");
  status.textContent = `Status: ${task.status}`;

  const priority = document.createElement("p");
  priority.textContent = `Prioritet: ${task.priority}`;

  const description = document.createElement("p");
  if (task.description) {
    description.textContent = `Beskrivning: ${task.description}`;
  }

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
  card.append(title, status, priority);

  if (task.description) {
    card.append(description);
  }

  card.append(completeButton, deleteButton);

  return card;
}

//-----------------------------
//---RENDER TASKS FOR WEBSITE--
function renderTasks(): void {
  if (app) {
    app.innerHTML = "";
  }

  if (tasks.length === 0) {
    app!.textContent = "Inga tasks ännu.";
    return;
  }
  const lastUpdated = localStorage.getItem("lastUpdated");

  if (lastUpdated !== null) {
    const updatedText = document.createElement("p");
    updatedText.textContent = `Senast uppdaterad: ${lastUpdated}`;
    app?.append(updatedText);
  }

  for (const task of tasks) {
    const card = renderTask(task);

    app?.append(card);
  }
}

loadTasks();
renderTasks();

//-----------------------------
//------------TESTS------------
//-----------------------------
