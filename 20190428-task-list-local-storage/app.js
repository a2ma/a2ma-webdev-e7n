// need to save items to localstorage
// need to load items on page load
// delete deleted items from localstorage
// clear all items when UI is cleared.

// define the UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();


// load all event listeners
function loadEventListeners() {
    //DOM load event
    document.addEventListener('DOMContentLoaded', getTasks);
    // add task event
    form.addEventListener('submit', addTask);
    // delete task event
    taskList.addEventListener('click', deleteTask);
    // clear tasks
    clearBtn.addEventListener('click', clearTasks);
    // filter tasks
    filter.addEventListener('keyup', filterTasks);
}


// load the tasks
function getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function (task) {
        //create li element
        const li = document.createElement('li');
        // add class
        li.className = 'collection-item';
        //create text node and append task
        li.appendChild(document.createTextNode(task));
        //create link element for deletion
        const link = document.createElement('a');
        //add classes
        link.className = 'delete-item secondary-content';
        //add icon HTML
        link.innerHTML = '<i class="fa fa-remove"></i>';
        // append link to li
        li.appendChild(link);
        // append li to ul
        taskList.appendChild(li);
    });
}

//add the task
function addTask(e) {

    if (taskInput.value === '') {
        alert('Please add a task to submit.')
    }

    //create li element
    const li = document.createElement('li');
    // add class
    li.className = 'collection-item';
    //create text node and append task
    li.appendChild(document.createTextNode(taskInput.value));
    //create link element for deletion
    const link = document.createElement('a');
    //add classes
    link.className = 'delete-item secondary-content';
    //add icon HTML
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // append link to li
    li.appendChild(link);
    // append li to ul
    taskList.appendChild(li);

    storeInLocalStorage(taskInput.value);

    // clear input field
    taskInput.value = '';


    e.preventDefault();
}


function storeInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') != null) {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    } else {
        tasks = [];
    }

    tasks.push(taskInput.value);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function deleteTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        // console.log(e.target.parentElement);
        if (confirm('Are you sure you want to delete this task?')) {
            e.target.parentElement.parentElement.remove();

            // remove from LS
            removeTaskFromLS(e.target.parentElement.parentElement);
        }
    }

}

function removeTaskFromLS(taskItem) {
    console.log(task);
    let tasks;
    if (localStorage.getItem('tasks') != null) {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    } else {
        tasks = [];
    }

    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
          tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearTasks() {
    // slower way
    // taskList.innerHTML = '';

    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    // clear from LS:
    clearTasksFromLocalStorage();
}

function clearTasksFromLocalStorage() {
  localStorage.clear();
}

function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(
        function (task) {
            const item = task.firstChild.textContent;
            if (item.toLowerCase().indexOf(text) != -1) {
                task.style.display = 'block';
            } else {
                task.style.display = 'none';
            }
        }
    );
}
