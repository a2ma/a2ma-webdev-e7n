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
    // add task event
    form.addEventListener('submit', addTask);
    // delete task event
    taskList.addEventListener('click', deleteTask);
    // clear tasks
    clearBtn.addEventListener('click', clearTasks);
    // filter tasks
    filter.addEventListener('keyup', filterTasks);
}

//add the task
function addTask(e) {

    if(taskInput.value === '') {
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

    // clear input field
    taskInput.value = '';

    e.preventDefault();
}

function deleteTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        console.log(e.target.parentElement);
        if(confirm('Are you sure you want to delete this task?')){
            e.target.parentElement.parentElement.remove();
        }
    }
    
}

function clearTasks(){
    // slower way
    // taskList.innerHTML = '';

    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}

function filterTasks(e){
   const text = e.target.value.toLowerCase();

   document.querySelectorAll('.collection-item').forEach(
       function(task){
           const item = task.firstChild.textContent;
           if(item.toLowerCase().indexOf(text) != -1){
                task.style.display = 'block';
           }else{
               task.style.display = 'none';
           }
       }
   );
}