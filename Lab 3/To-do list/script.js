function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');

    if(taskText === '') return;
    li.className = 'todo-item';
    li.innerHTML = 
        `<input type="checkbox" onclick="done(this)">
        <span class="task-text"> ${taskText} </span>
        <button class="delete-btn" onclick="deleteTask(this)"> &#128465; </button>`;

    taskList.appendChild(li);
    taskInput.value = '';
}

function done(checkbox) {
    const taskItem = checkbox.parentElement;
    taskItem.classList.toggle('completed');
}
function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}