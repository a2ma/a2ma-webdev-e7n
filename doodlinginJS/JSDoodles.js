/*
'Some Javascript Practice'
Mostly from freecodecamp
*A2MA - 2017-09-06
*/
// ##############################################################################################
//FACTORIALIZE
// ##############################################################################################

console.log("Houston, we have a connection.");

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

// ##############################################################################################
//PALINDROME
// ##############################################################################################

// function palindromeTest(str){
//   str = str.replace(/[\W_]/g, '');
// }

function palindromeOne(str) {
  str = str.replace(/[\W_]/g, ''); //was not assigning string with the replaced regex to anything
    console.log(str);
  str = str.toLowerCase();
    console.log(str);
  var strreversed = str.split('').reverse().join('');
    console.log(strreversed);
  if(str === strreversed){
    return true;
  }

    return false;
}

// console.log(palindromeOne("eye"));
// console.log(palindromeOne("race car"));
// console.log(palindromeOne("_eye"));

//this version of the palindromeChecker is more efficient, since it 
//compares first letter by last letter--that means it only has to check half--and
//detects a failure as early as possible, after which it reports the failure
//without needlessly checking subsequent letters
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

// console.log(palindromeTwo("eye"));
// console.log(palindromeTwo("race car"));
// console.log(palindromeTwo("_eye"));

//this version of the palindrome check is the shortest
function palindromeThree(str){
    return str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('') ===
        str.replace(/[\W_]/g, '').toLowerCase();
}

// console.log(palindromeThree("eye"));
// console.log(palindromeThree("race car"));
// console.log(palindromeThree("_eye"));
// console.log(palindromeThree("not a palindrome"));

//insert the last example, the most efficient one, below:

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


// ##############################################################################################
// Find WORD LENGTH, Return length of longest word
// ##############################################################################################

// //First Try
// function findLongestWord(str) {
//   strarray = str.split(" ");
//   var longest = '';
//
//   for(var i = 0; i < strarray.length-1; i++){
//     if(strarray[i].length > strarray[i+1].length){
//       if(longest < strarray[i].length){
//         longest = strarray[i];
//       }
//     }else{
//       if(longest < strarray[i+1].length){
//         longest = strarray[i+1];
//       }
//     }
//   }
//   console.log(longest);
//   return longest.length;
// }

//Second Try - works BUT:
//I forgot to compare the LENGTH of longest to the length of the array element; careless mistake
//unnecessary length and convolutedness.
function findLongestWord(str) {
  strarray = str.split(" ");
  var longest = '';
  // console.log(strarray.length);
  // console.log(strarray[9]);
  for(var i = 0; i < strarray.length-1; i++){
    //using length-1 with i < is made neccessary only by the convoluted logic within the function.
    //and only works because of "i+1" below
    //var i = 0; i < strarray would work as well if i+1 hadn't been used.
    // console.log(strarray[i]); //the last word would never be printed because i ends at strarray[length-1]
    //the comparison would still work though, because i+1 ensures the scan is to the end.
    if(strarray[i].length > strarray[i+1].length){
      if(longest.length < strarray[i].length){
        longest = strarray[i];
      }
    }else{
      if(longest.length < strarray[i+1].length){
        longest = strarray[i+1];
      }
    }
  }
  console.log(longest);
  return longest.length;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); //should return 6.
// console.log(findLongestWord("May the force be with you")); //should return 5.
// console.log(findLongestWord("Google do a barrel roll")); //should return 6.
// console.log(findLongestWord("What is the average airspeed velocity of an unladen swallow")); //should return 8.
// console.log(findLongestWord("What if we try a super-long word such as otorhinolaryngology")); //should return 19.


// for just finding the maximum length, without returning the longest word:
function longestWord(str){
  var words = str.split(" ");
  var maxlength = 0;

  for(var i = 0; i < words.length; i++){
    console.log(words[i]);
    if(words[i].length > maxlength){
      maxlength = words[i].length;
    }
  }

  return maxlength;
}
// console.log(longestWord("The quick brown fox jumped over the lazy dog"));

//Another solution, using the Array object's reduce() method:

function longestWordReduce(str){
  return str.split(" ")
    .reduce(function(x, y){
      return Math.max(x, y.length)
  },[0]);
}
// see: https://forum.freecodecamp.org/t/javascript-array-prototype-reduce/14299
// AND: https://forum.freecodecamp.org/t/using-array-prototype-reduce-to-reduce-conceptual-boilerplate-for-problems-on-arrays/14687
// console.log(longestWordReduce("What if we try a super-long word such as otorhinolaryngology"));

// Advanced solution, seems most efficient because it compares a shorter
//array each time, using splice to get rid of the parts already compared
//and found to be shorter

function findLongestRecursion(str){
  //splits each time because of the recursion
  str = str.split(" ");

  //if the array resulting from split is just one element long
  //then that singular element is the longest
  if(str.length ==1){
    return str[0].length;
  }

  //compares first two elements; if first is greater, discard second
  //and pass back to function as argument.
  if(str[0].length >= str[1].length){
    str.splice(1,1);
    return findLongestRecursion(str.join(" "));
  }
  //if second is greater, cut away the second and subsequent elements
  // away from the first and pass back to function as argument
  if(str[0].length <= str[1].length){
    return findLongestRecursion(str.slice(1, str.length).join(" "));
  }
}


// ##############################################################################################
//TitleCase A Sentence:
// ##############################################################################################

//First Try:
// function titleCase(str) {
//   var words = str.split(" ");
//
//   for(var i = 0; i < words.length; i++){
//     var letters = words[i].split('');
//     letters[0].toUpperCase();
//     words[i] = letters;
//   }
//   str = words.join(" ");
//   return str;
// }

//Second Try:
// function titleCase(str) {
//   var words = str.split(" ");
//
//   for(var i = 0; i < words.length; i++){
//     var letters = words[i].split('');
//     letters[0].toUpperCase();
//     words[i] = letters.join('');
//   }
//   str = words.join(" ");
//   return str;
// }

//Third Try:

// function titleCase(str) {
//   var words = str.split(" ");
//
//   for(var i = 0; i < words.length; i++){
//     var letters = words[i].split('');
//     letters[0].to_s.toUpperCase();
//     words[i] = letters.join('');
//   }
//   str = words.join(" ");
//   return str;
// }

//FourthTry:
// function titleCase(str) {
//   var words = str.split(" ");
//
//   for(var i = 0; i < words.length; i++){
//     var letters = words[i].split('');
//     var firstLetter = letters[0];
//     letters[0] = firstLetter.toUpperCase();
//     words[i] = letters.join('');
//   }
//   str = words.join(" ");
//   return str;
// }

// My Solution:
function titleCase(str) {
  var words = str.toLowerCase().split(" ");

  for(var i = 0; i < words.length; i++){
    var letters = words[i].split('');
    var firstLetter = letters[0];
    letters[0] = firstLetter.toUpperCase();
    words[i] = letters.join('');
  }
  str = words.join(" ");
  return str;
}

titleCase("i'm a little tea pot");

//Review attempt:
//function titleCase(str) {
//  var words = str.toLowerCase().split(" ");
//  for(var i = 0; i < words.length; i++){
//    var eachWord = words[i];
//    var lttrs = eachWord.split('');
//    lttrs[0] = lttrs[0].toUpperCase();
//    words[i] = lttrs.join('');
//  }
//  return words.join(" ");
//}

//2017-09-30
//FCCamp "Basic" solution for TitleCase problem:
String.prototype.replaceAt = function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
};


function titleCase(str) {
    var newTitle = str.split(' ');
    var updatedTitle = [];
    for (var st in newTitle) {
        updatedTitle[st] = newTitle[st].toLowerCase().replaceAt(0, newTitle[st].charAt(0).toUpperCase());
    }
    return updatedTitle.join(' ');
}


//Intermediate Solution on FCCamp
function titleCase(str) {
  var convertToArray = str.toLowerCase().split(" ");
  var result = convertToArray.map(function(val){
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

titleCase("I'm a little tea pot");

//Advanced solution:
function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}

//the regex searches from the beginning of the string (^) for a non-whitespace character (\S) that comes only after a whitespace (\s), and the search is global. 

// ##############################################################################################
//Retrieve Largest Numbers from two dimensional Array
// ##############################################################################################

//first Try
function largestOfFour(arr) {
  var maxNumArr = [];
  var maxNum = 0;
  for(var i = 0; i< arr.length; i++){
    for(var j = 0; j < arr[i].length; j++){
      if(arr[i][j] > maxNum){
        maxNum = arr[i][j];
      }
    }
    maxNumArr.push(maxNum);
    maxNum = 0; //this shouldn't necessarily be set to zero here; could be reset to arr[i][0] at each round above
  }
  return maxNumArr;
}

//Second try
function largestOfFour(arr) {
  var maxNumArr = [];
  var maxNum = 0;
  for(var i = 0; i< arr.length; i++){
    for(var j = 0; j < arr[i].length; j++){
        maxNum = arr[i][0];
      if(arr[i][j] > maxNum){
        maxNum = arr[i][j];
      }
    }
    maxNumArr.push(maxNum);
  }
  return maxNumArr;
}

// ##############################################################################################
//CONFIRM ENDING
// ##############################################################################################
//My Solution
function confirmEnding(str, target) {
  var x = target.length;
  if(str.substr(str.length-x, x) === target){
    return true;
  }else{
    return false;
  }
}

console.log(confirmEnding("Bastian", "n"));

//https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-confirm-the-ending/16006
//[See confirmEnding solutions at link above]

// ##############################################################################################
//REPEAT STRING
// ##############################################################################################

function repeatStringNumTimes(str, num) {
  var originalStr = str;
  var count = num -1;
  if(num > 0){
    while(count > 0){
      str += originalStr;
      count --;
    }
  }else{
    str = "";
  }
  return str;
}

repeatStringNumTimes("abc", 3);


// ##############################################################################################
//TRUNCATE STRING
// ##############################################################################################
//A2MA - first succesful effort
function truncateString(str, num) {
  var truncStr = str;
  if(str.length > num){
    if(num > 3){
      truncStr = str.slice(0, str.length - (str.length - (num - 3))) +
        "...";
    }else{
      truncStr = str.slice(0, str.length - (str.length - num)) +
        "...";
    }
  }
  return truncStr;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);

//FCCamp solutions @ https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-truncate-a-string/16089

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX go back and check intermediate and advanced largestNumber solutions later
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX 2017-09-26: REVIEW solutions on freecodecamp; also go back and look at last palindrome solution



