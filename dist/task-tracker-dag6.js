// // Visa rubrik
// function showHeader(): void {
//   console.log(`
// ==================================
//---------------------------------
//--------ARRAY MED OBJEKT TASK----
//---------------------------------
let tasks = [];
let nextId = 1;
//-----------------------------
//-- HÄMTAR ELEMENT FRÅN HTML--
const title = document.querySelector("#title");
title.textContent = "Mina Tasks";
const app = document.querySelector("#app");
const taskInput = document.querySelector("#task-input");
const priorityInput = document.querySelector("#priority-input");
const taskForm = document.querySelector("#task-form");
const errorMessage = document.querySelector("#error-message");
//-----------------------------
//--------VALIDATE TASK--------
function validateTaskName(taskName) {
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
function handleSubmit(event) {
    event.preventDefault();
    const taskName = taskInput.value.trim();
    const validationError = validateTaskName(taskName);
    if (validationError !== "") {
        errorMessage.textContent = validationError;
        return;
    }
    errorMessage.textContent = "";
    const priority = priorityInput.value;
    addTask(taskName, priority);
    taskForm.reset();
}
//-----------------------------
//--------ADD TASK-------------
function addTask(name, priority) {
    const newTask = {
        id: nextId,
        name: name,
        status: "pending",
        priority: priority,
    };
    tasks.push(newTask);
    nextId++;
    renderTasks();
}
//----------------------------------
//------TOGGLE TASK BY ID-----------
function toggleTask(id) {
    for (const task of tasks) {
        if (task.id === id) {
            if (task.status === "pending") {
                task.status = "completed";
            }
            else {
                task.status = "pending";
            }
        }
    }
    renderTasks();
}
//----------------------------------
//------DELETE TASK BY ID-----------
function deleteTask(id) {
    tasks = tasks.filter((task) => task.id !== id);
    renderTasks();
}
//-----------------------------
//---RENDER ONE TASK CARD------
function renderTask(task) {
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
function renderTasks() {
    if (app) {
        app.innerHTML = "";
    }
    for (const task of tasks) {
        const card = renderTask(task);
        app?.append(card);
    }
}
renderTasks();
export {};
//-----------------------------
//------------TESTS------------
//-----------------------------
//# sourceMappingURL=task-tracker-dag6.js.map