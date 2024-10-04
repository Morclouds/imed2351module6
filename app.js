function Task(description) {
    this.description = description;
    this.completed = false;

    // Object method to mark task as completed
    this.completeTask = function() {
        this.completed = true;
    };
}

// Array to store tasks
let tasks = [];

// Function to add a new task to the array and update UI
function addTask(description) {
    let newTask = new Task(description); // Create a new Task object
    tasks.push(newTask); // Add task object to the array
    renderTasks(); // Update the UI to display the tasks
}

// Function to list all tasks in the UI
function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = ''; // Clear existing tasks

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : ''; // Add completed class if necessary
        li.innerHTML = `
            ${task.description}
            <button onclick="completeTask(${index})">Complete</button>
        `;
        taskList.appendChild(li);
    });
}

// Function to mark a task as completed and update the UI
function completeTask(index) {
    tasks[index].completeTask(); // Call the object method to mark as completed
    renderTasks(); // Update the UI to reflect changes
}

// Function to handle adding a new task
function addNewTask() {
    const newTaskInput = document.getElementById('new-task');
    const taskDescription = newTaskInput.value.trim();
    
    if (taskDescription) {
        addTask(taskDescription);
        newTaskInput.value = ''; // Clear input after adding task
    } else {
        alert('Please enter a task description.');
    }
}