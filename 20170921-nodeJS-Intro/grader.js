function grader(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    
    return(Math.round(sum/arr.length));
}

var scores = [78, 98, 75, 94, 86, 75, 78, 89];
console.log(grader(scores));