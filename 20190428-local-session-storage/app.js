/* ##############################################################################################
2019-04-28 - Basic Intro to Local and Session Storage - Traversy. JavaScript Basics. 2017?. Udemy.
Notes:
##############################################################################################*/

// // set local storage item
// // localStorage.setItem('name', 'Ahmed');
// // localStorage.setItem('age', '30');

// // set session storage item
// // sessionStorage.setItem('name', 'Maryam');

// // remove local storage item
// // localStorage.removeItem('name');

// // get local storage item
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// console.log(`Name: ${name} \nAge: ${age}`);

// // clear local storage
// localStorage.clear();

// console.log(`Name: ${name} \nAge: ${age}`)

/* ##############################################################################################
2019-04-28 - Task List with Local and Session Storage - Traversy. JavaScript Basics. 2017?. Udemy.
Notes:
##############################################################################################*/

document.querySelector('form').addEventListener('submit',
    function (e) {
        const task = document.getElementById('task').value;

        let tasks;

        if (localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }

        tasks.push(task);

        localStorage.setItem('tasks', JSON.stringify(tasks));
        alert(`Task saved: \n"${task}"`);
        e.preventDefault();
    }
);


const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
    console.log(task);
})