console.log("Print all Numbers between -10 and 19");
function printNum(){
    for(var i = -10; i < 20; i++){
	console.log(i);
    }
};
console.log("Print all even numbers between 10 and 40");

function printEven(){
  for(var i = 10; i < 40; i++){
      if(i % 2 === 0){
          console.log(i);
      }
  }  
};

console.log("Print all odd numbers between 300 and 333");
function printOdd(){
  for(var i = 300; i < 333; i++){
      if(i % 2 !== 0){
          console.log(i);
      }
  }  
};

console.log("Print all numbers divisible by 5 and 3 between 5 and 50");
function printOddFew(){
  for(var i = 5; i < 50; i++){
      if(i % 5 === 0 && i % 3 === 0){
          console.log(i);
      }
  }  
};


