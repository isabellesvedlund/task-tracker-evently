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
const addButton = document.querySelector("#add-button");
addButton.addEventListener("click", () => {
    const taskName = taskInput.value.trim();
    if (taskName === "") {
        console.log("Task name is required.");
        return;
    }
    const priority = priorityInput.value;
    addTask(taskName, priority);
});
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
    taskInput.value = "";
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
function toggleTaskStatus(taskName) {
    const foundTask = tasks.find((task) => task.name === taskName);
    if (foundTask) {
        if (foundTask.status === "pending") {
            foundTask.status = "completed";
        }
        else {
            foundTask.status = "pending";
        }
    }
    else {
        console.log("Tasken hittades inte.");
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
//-----------------------------
//------------TESTS------------
//-----------------------------
//addTask("Lära mig TypeScript", "high");
//addTask("Handla", "medium");
//addTask("Diska", "low");
renderTasks();
export {};
//# sourceMappingURL=task-tracker-dag6.js.map