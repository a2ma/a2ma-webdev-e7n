// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// // // click
// // clearBtn.addEventListener('click', runEvent);
// // double click
// // clearBtn.addEventListener('dblclick', runEvent);
// // other examples: mousedown, mouseup, mouseenter, mouseleave, mouseover, mouseout
// document.addEventListener('mousemove', runEvent);
// card.addEventListener('mousemove', runEvent);

// //Event Handler
// function runEvent(e){
//     console.log(`EVENT TYPE: ${e.type}`);
//     // heading.textContent = `Mouse X: ${e.offsetX}, Mouse Y: ${e.offsetY}`;
//     heading.textContent = `Mouse X: ${e.clientX}, Mouse Y: ${e.clientY}`;
//     // document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, ${e.offsetY - e.offsetX})`
//     document.body.style.backgroundColor = `rgb(${e.clientX}, ${e.clientY}, ${e.clientY - e.clientX})`
// }

// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');
// const heading = document.querySelector('h5');

// taskInput.addEventListener('keydown', runEvent);
// // keyup, keypress, focus, blur (clicking out of an input), cut, paste, input (any kind of event)
// // change - in select inputs for changing the selection

// // form.addEventListener('submit', runEvent);

// function runEvent(e) {
//     console.log(`Event type: ${e.type}`);

//     console.log(e.target.value);
//     heading.innerText = e.target.value;
//     // // get input value
//     // console.log(taskInput.value);
//     // // clear form
//     // taskInput.value = '';
//     // e.preventDefault();
// }


// event bubbling

// document.querySelector('.card-title').addEventListener('click', function(){console.log('card-title')});
// document.querySelector('.card-content').addEventListener('click', function(){console.log('card-content')});
// document.querySelector('.card').addEventListener('click', function(){console.log('card')});
// document.querySelector('.col').addEventListener('click', function(){console.log('col')});


//event delegation
document.body.addEventListener('click', deleteItem);

function deleteItem(e){
    // console.log(e.target);
    // if(e.target.parentElement.className === 'delete-item secondary-content'){
    //     console.log('delete item');
    // }
    if(e.target.parentElement.classList.contains('delete-item')){
        console.log('delete item');
        e.target.parentElement.parentElement.remove();
    }
}