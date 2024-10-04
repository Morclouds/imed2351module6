
function Task(description) {
    this.description = description;
    this.completed = false;

   
    this.completeTask = function() {
        this.completed = true;
    };
}


let tasks = [];


function addTask(description) {
    let newTask = new Task(description); 
    tasks.push(newTask); 
    renderTasks(); 
}


function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : ''; 
        li.innerHTML = `
            <span>${task.description}</span>
            <button onclick="completeTask(${index})">Complete</button>
        `;
        taskList.appendChild(li);
    });
}


function completeTask(index) {
    tasks[index].completeTask(); 
    renderTasks(); 
}


function addNewTask() {
    const newTaskInput = document.getElementById('new-task');
    const taskDescription = newTaskInput.value.trim();
    
    if (taskDescription) {
        addTask(taskDescription);
        newTaskInput.value = ''; 
    } else {
        alert('Please enter a task description.');
    }
}