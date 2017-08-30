console.log("CONNECTED");
var todos = [];
var input;
actionMenu();

while(input.toLowerCase() != "quit"){
  if(input.toLowerCase() === "add"){
      listAdd();
  }else if(input.toLowerCase() === "list"){
      listToDos();
  }else if(input.toLowerCase() === "delete"){
      listDelete();
  }
  actionMenu();
}
console.log("Program terminated");
alert("Program sucessfully terminated.");

//seems to me that functions should be defined above the code, even if below works.
function listToDos(){
    console.log("*********");
    todos.forEach(function(todo, i){
      console.log(i + ": " + todo);
    });
    console.log("*********");
}

function listAdd(){
    var addition = prompt("Please enter new item: ");
    todos.push(addition);
    console.log("Item added.")
    console.log(todos);
}

function listDelete(){
    var deletionindex = prompt("Which item do you want to delete? (Enter list number).");
      todos.splice(deletionindex, 1);
      console.log("Item Deleted.")
}

function actionMenu(){
    input = prompt("What do you want to do? \n 1. \"Add\" - Enters new item \n 2. \"List\" - prints out to do list" +
                  "\n 3. \"Delete\" - deletes an item from the list \n 4. \"Quit\" - ends program");
}
