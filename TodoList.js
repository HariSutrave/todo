document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");

    // Load tasks from localStorage
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.forEach((task) => addTaskToList(task));
    }

    // Save tasks to localStorage
    function saveTasks() {
        const tasks = [];
        document.querySelectorAll("#task-list li").forEach((li) => {
            tasks.push(li.textContent.replace("❌", "").trim());
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Add task to the list
    function addTaskToList(task) {
        const li = document.createElement("li");
        li.textContent = task;

        // Add delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.style.marginLeft = "10px";
        deleteBtn.addEventListener("click", function () {
            li.remove();
            saveTasks();
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    }

    // Add task event
    addTaskBtn.addEventListener("click", function () {
        const task = taskInput.value.trim();
        if (task !== "") {
            addTaskToList(task);
            saveTasks();
            taskInput.value = ""; // Clear the input field
        }
    });

    // Load tasks on page load
    loadTasks();
});
