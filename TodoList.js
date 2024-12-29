let taskList = document.getElementById("task-list");
let taskInput = document.getElementById("task-input");
let addTaskBtn = document.getElementById("add-task-btn");

let tasks = [];

addTaskBtn.addEventListener("click", addTask);

function addTask() {
    let task = taskInput.value.trim();
    if (task) {
        tasks.push({ task, completed: false });
        taskInput.value = "";
        renderTaskList();
    }
}

function renderTaskList() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.textContent = task.task;
        if (task.completed) {
            li.classList.add("completed");
        }
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", () => {
            tasks.splice(index, 1);
            renderTaskList();
        });
        li.appendChild(deleteBtn);
        li.addEventListener("click", () => {
            task.completed = !task.completed;
            renderTaskList();
        });
        taskList.appendChild(li);
    });
}
