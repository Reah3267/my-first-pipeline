function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    
    if (taskInput.value.trim() === "") {
        return;
    }
    
    const li = document.createElement("li");
    const timestamp = new Date().toLocaleString();

    li.innerHTML = `${taskInput.value} <span class="timestamp">${timestamp}</span> <button class="remove-btn" onclick="removeTask(this)">Remove</button>`;
    taskList.appendChild(li);
    
    taskInput.value = "";
}

function removeTask(button) {
    const li = button.parentElement;
    li.remove();
}
