function factorialize(num) {
  if(num > 0){
      var factorialization = num;
      for (var i = 1; i < num; i++){
      factorialization *= (num - i);
    }
      return factorialization;
  }
    return 1;
}

//var num = prompt("Enter a number to be factorialized: ");
//var numfactorial = factorialize(num);
//alert("The factorial of " + num + " = " + numfactorial);

function palindromeOne(str) {
  str = str.replace(/[\W_]/g, ''); //I was not assigning the string with the replaced regular expression to  anything, so it wasn't being saved.
    console.log(str);
  str = str.toLowerCase();
    console.log(str);
  var strarray = str.split('').reverse().join('');
    console.log(strarray);
  if(str === strarray){
    return true;
  }
    
    return false;
}

console.log(palindromeOne("eye"));
console.log(palindromeOne("race car"));
console.log(palindromeOne("_eye"));

function palindromeTwo(str){
    str = str.toLowerCase().replace(/[\W_]/g, '');
    console.log(str);
    for(var i = 0, len = str.length-1; i < len/2; i++){
        if(str[i] !== str[len-i]){
            return false;
        }
        
        return true;
    }
}

console.log(palindromeTwo("eye"));
console.log(palindromeTwo("race car"));
console.log(palindromeTwo("_eye"));

function palindromeThree(str){
    return str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('') ===
        str.replace(/[\W_]/g, '').toLowerCase();
}

console.log(palindromeThree("eye"));
console.log(palindromeThree("race car"));
console.log(palindromeThree("_eye"));
console.log(palindromeThree("not a palindrome"));
