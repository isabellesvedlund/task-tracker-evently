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
const descriptionInput = document.querySelector("#description-input");
const descriptionCount = document.querySelector("#description-count");
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
function addTask(name, priority, description) {
    const newTask = {
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
function saveTasks() {
    const json = JSON.stringify(tasks);
    localStorage.setItem("tasks", json);
    saveLastUpdated();
}
//-----------------------------
//-----SAVE LAST UPDATED-------
function saveLastUpdated() {
    const now = new Date().toLocaleString("sv-SE");
    localStorage.setItem("lastUpdated", now);
}
//-----------------------------
//--------LOAD TASKS------------
function loadTasks() {
    const json = localStorage.getItem("tasks");
    if (json === null) {
        return;
    }
    const loadedTasks = JSON.parse(json);
    tasks = loadedTasks;
    if (tasks.length > 0) {
        nextId = Math.max(...tasks.map((task) => task.id)) + 1;
    }
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
    saveTasks();
    renderTasks();
}
//----------------------------------
//------DELETE TASK BY ID-----------
function deleteTask(id) {
    tasks = tasks.filter((task) => task.id !== id);
    saveTasks();
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
function renderTasks() {
    if (app) {
        app.innerHTML = "";
    }
    if (tasks.length === 0) {
        app.textContent = "Inga tasks ännu.";
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
export {};
//-----------------------------
//------------TESTS------------
//-----------------------------
//# sourceMappingURL=task-tracker-dag6.js.map