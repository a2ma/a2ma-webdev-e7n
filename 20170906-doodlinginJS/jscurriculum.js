/*
JavaScript Curriculum
Sources:
  -FreeCodeCamp
  -Traversy - JavaScript Course, Udemy
*A2MA - 2017-09-06
*/

//alert("بسم الله الرحمن الرحيم");

//Takes name and age

//alert("Hello world, from JS");
//var user1Name = prompt("Welcome, user. What is your first name?");
//alert("Hello " + user1Name);
//console.log(user1Name);
//
//var user2Name = prompt("What is your last name?");
//alert("Name recorded: " + user1Name + " " + user2Name);
//console.log(user2Name);
//
//var age = prompt("How old are you, " + user1Name + "? Don't worry, I'm not a stalker. Honest.");
//alert("User age recorded: " + age);
//console.log(age);
//
//alert("Welcome, " + user1Name + " " + user2Name + ". You are " + age + " years old. Congrats.");

//finds age (approximate--come back and find exact age)

//alert("Enter your birthdate to find out your approximate age in days: ");

// const para = document.querySelector('#player');
// para.addEventListener('click', updateName);
// var ageDays = document.querySelector("#age-days");
// ageDays.addEventListener('click', updateAgeDays);
// var ageDayButton = document.querySelector("#age-day-button");
// ageDayButton.addEventListener('click', calcAgeDays);
// var ageRaw;
// var ageCooked;

// function calcAgeDays() {
//     ageRaw = prompt("Enter your age in years to find your approximate age in days: ");
//     ageCooked = ageRaw * 365.25;

// }
// function updateAgeDays() {
//     ageDays.innerHTML = ageCooked;
// }


// function updateName() {
//    let name = prompt('Enter your name, player: ');
//    para.textContent = 'Player 1 is ' + name;
// }



// function createParagraph() {
//     let para = document.createElement('p');
//     para.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ad commodi possimus tempore. Repellat accusamus fuga debitis, molestias laborum porro saepe facere. Magni, tenetur. Incidunt sapiente cumque reprehenderit recusandae, quam labore ratione culpa, dolorum officiis accusantium aperiam ea debitis velit laborum voluptatibus quaerat blanditiis error pariatur, ullam quasi. Aspernatur error pariatur, nam nostrum eaque harum sunt porro voluptas suscipit dignissimos architecto voluptate? Ea eum ipsam possimus corporis aperiam quis ut ducimus quidem totam tempora cupiditate explicabo rerum repellat maxime nostrum, a, mollitia consectetur at quod velit sapiente accusantium! Odit cum fugit repudiandae reprehenderit quae, maxime doloremque numquam optio expedita voluptas nostrum repellat eos. Delectus, nesciunt quos! Nostrum dignissimos, dolorem quas architecto nobis incidunt dolor ab obcaecati similique fuga sequi ipsum.';
//     document.body.appendChild(para);
// }
// const buttons = document.querySelectorAll('button');

// for(let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', createParagraph);
// }


// let val;

// val = 5;

// console.log(typeof val);

// val = String(5);

// val = (5).toString();

// val = Number('5'); // 5

// val = Number(true); // gives 1
// val = Number(false); // gives 0
// val = Number(null); // also gives 0
// val = Number('Some string'); // gives NaN
// val = Number([1, 2, 3, 4, 5]); // gives NaN


// val = parseInt('100.30'); // returns 100
// val = parseFloat('100.33'); // returns 100.3
// val = val.toFixed(2); // to get 2 more spaces

// // type coercion - when JS engine auto converts one data type to another

// // Math Object
// Math.PI
// Math.E
// Math.round() // rounds up or down depending on decimal
// Math.ceil() // rounds up always
// Math.floor() // rounds down always
// Math.sqrt()
// Math.abs()
// Math.pow(2, 2);
// Math.min()
// Math.max()

// // randomNumber = Math.floor(Math.random() * 10 + 1);

// // console.log(randomNumber);


// // Strings

// let stringVal = 'some string';

// stringVal = stringVal.concat(' ', 'and some concatenated material');

// console.log(stringVal);

// val = stringVal.indexOf('s');
// console.log(val);
// val = stringVal.lastIndexOf('s');
// console.log(val);
// val = stringVal.charAt('4');
// console.log(val);
// val = stringVal.charAt(stringVal.length - 1);
// console.log(val);

// val = stringVal.substring(0, 20); // end is non-inclusive; if no 
// // end indicated goes to end of string
// console.log(val);

// val = stringVal.slice(0, 20);
// console.log(val);
// val = stringVal.slice(-10);
// console.log(val);

// val = 'tag1, tag2, tag3, tag4, tag5';
// val = val.split(', ');
// console.log(val);

// val = stringVal.replace('material', 'string');

// console.log(val);

// val = stringVal.includes('Humpty');
// console.log(val);

// // Template literals - introduced in ES6
// const name = 'Joe';
// const age = 30;
// const job = 'consigliere';
// const city = 'New York';
// let html;

// // without template strings (es5)
// html = '<ul><li>Name: ' + name + '</li><li>, etc.</li></ul>';

// document.body.querySelector('#js-pad').innerHTML = html;

// // with template literals
// html = `<ul>
//             <li>Name: ${name}</li>
//             <li>, etc.</li>
//         </ul>`

// document.body.querySelector('#js-pad').innerHTML = html;

// /* 
// Arrays
// */
// testArray = new Array();

// for (var i = 0; i < 10; i++) {
//   testArray[i] = i + 45;
// }

// console.log(testArray);

// // testArray.unshift() // - adds on to the front.
// // testArray.shift() // remove from the front
// // testArray.splice();
// // testArray.reverse();

// testArray.sort(function (x, y) {
//   return x - y;
// })

// console.log(testArray);

// // finding with specific criteria

// function over50(num) {
//   return num > 50;
// }


// val = testArray.find(over50);

// console.log(val);

// /* 
// OBJECT LITERAL
// */

// person = {
//   name: 'Harry',
//   age: 11,
//   address: {
//     city: 'Little Whinging',
//     state: 'Surrey'
//   },
//   getBirthYear: function () {
//     return 2018 - this.age;
//   }
// }

// /* 
// Dates and Times
// */

// let someDate = new Date('10 12 1999 12:23:15');
// console.log(someDate);

// someDate = new Date('October 12 1999 12:23:15');
// console.log(someDate);

// someDate = new Date('10/12/1999 12:23:15');
// console.log(someDate);

// let someDate2 = new Date();
// console.log(someDate2);

// val = someDate2.getMonth(); // starts off at 0, so each month is one less
// console.log(val);

// someDate.getTime(); // gets the time since a set date


// ##############################################################################################################
// ##############################################################################################################
// FreeCodeCamp > JavaScript Algorithms and Data Structures Certification
// ##############################################################################################################
// ##############################################################################################################

// ##############################################################################################

// Basic JavaScript

// ##############################################################################################

// #############################################################################
// Loops
// #############################################################################

// // While loops
// console.log("Print all Numbers between -10 and 19");

// var counter = -10;

// while(counter < 20){
//     console.log(counter);
//     counter++;
// }

// console.log("Print all even numbers between 10 and 40");
// var counter = 10;

// while(counter < 40){
//     if(counter % 2 ===0){
//         console.log(counter);
//     }
//     counter++;
// }

// console.log("Print all odd numbers between 300 and 333");
// var counter = 300;

// while(counter < 333){
//     if(counter % 2 !== 0){
//         console.log(counter);
//     }
//     counter++;
// }

// console.log("Print all numbers divisible by 5 and 3 between 5 and 50");
// var counter = 5;

// while(counter < 50){
//     if(counter % 5 === 0 && counter % 3 === 0){
//         console.log(counter);
//     }
//     counter++;
// }

// // For loops
// console.log("Print all Numbers between -10 and 19");
// function printNum(){
//     for(var i = -10; i < 20; i++){
// 	console.log(i);
//     }
// };
// console.log("Print all even numbers between 10 and 40");

// function printEven(){
//   for(var i = 10; i < 40; i++){
//       if(i % 2 === 0){
//           console.log(i);
//       }
//   }
// };

// console.log("Print all odd numbers between 300 and 333");
// function printOdd(){
//   for(var i = 300; i < 333; i++){
//       if(i % 2 !== 0){
//           console.log(i);
//       }
//   }
// };

// console.log("Print all numbers divisible by 5 and 3 between 5 and 50");
// function printOddFew(){
//   for(var i = 5; i < 50; i++){
//       if(i % 5 === 0 && i % 3 === 0){
//           console.log(i);
//       }
//   }
// };


// #############################################################################
//FACTORIALIZE
// #############################################################################

// console.log("Houston, we have a connection.");

// function factorialize(num) {
//   if (num > 0) {
//     var factorialization = num;
//     for (var i = 1; i < num; i++) {
//       factorialization *= (num - i);
//     }
//     return factorialization;
//   }
//   return 1;
// }

// //var num = prompt("Enter a number to be factorialized: ");
// //var numfactorial = factorialize(num);
// //alert("The factorial of " + num + " = " + numfactorial);

// #############################################################################
//PALINDROME
// #############################################################################

// // function palindromeTest(str){
// //   str = str.replace(/[\W_]/g, '');
// // }

// function palindromeOne(str) {
//   str = str.replace(/[\W_]/g, ''); //was not assigning string with the replaced regex to anything
//   console.log(str);
//   str = str.toLowerCase();
//   console.log(str);
//   var strreversed = str.split('').reverse().join('');
//   console.log(strreversed);
//   if (str === strreversed) {
//     return true;
//   }

//   return false;
// }

// // console.log(palindromeOne("eye"));
// // console.log(palindromeOne("race car"));
// // console.log(palindromeOne("_eye"));

// //this version of the palindromeChecker is more efficient, since it
// //compares first letter by last letter--that means it only has to check half--and
// //detects a failure as early as possible, after which it reports the failure
// //without needlessly checking subsequent letters
// function palindromeTwo(str) {
//   str = str.toLowerCase().replace(/[\W_]/g, '');
//   console.log(str);
//   for (var i = 0, len = str.length - 1; i < len / 2; i++) {
//     if (str[i] !== str[len - i]) {
//       return false;
//     }

//     return true;
//   }
// }

// // console.log(palindromeTwo("eye"));
// // console.log(palindromeTwo("race car"));
// // console.log(palindromeTwo("_eye"));

// //this version of the palindrome check is the shortest
// function palindromeThree(str) {
//   return str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('') ===
//     str.replace(/[\W_]/g, '').toLowerCase();
// }

// // console.log(palindromeThree("eye"));
// // console.log(palindromeThree("race car"));
// // console.log(palindromeThree("_eye"));
// // console.log(palindromeThree("not a palindrome"));

// #############################################################################
// Find WORD LENGTH, Return length of longest word
// #############################################################################

// // // First Try
// // function findLongestWord(str) {
// //   strarray = str.split(" ");
// //   var longest = '';
// //
// //   for(var i = 0; i < strarray.length-1; i++){
// //     if(strarray[i].length > strarray[i+1].length){
// //       if(longest < strarray[i].length){
// //         longest = strarray[i];
// //       }
// //     }else{
// //       if(longest < strarray[i+1].length){
// //         longest = strarray[i+1];
// //       }
// //     }
// //   }
// //   console.log(longest);
// //   return longest.length;
// // }

// // Second Try - works BUT:
// // I forgot to compare the LENGTH of longest to the length of the array element; careless mistake
// // unnecessary length and convolutedness.
// function findLongestWord(str) {
//   strarray = str.split(" ");
//   var longest = '';
//   // console.log(strarray.length);
//   // console.log(strarray[9]);
//   for (var i = 0; i < strarray.length - 1; i++) {
//     //using length-1 with i < is made neccessary only by the convoluted logic within the function.
//     //and only works because of "i+1" below
//     //var i = 0; i < strarray would work as well if i+1 hadn't been used.
//     // console.log(strarray[i]); //the last word would never be printed because i ends at strarray[length-1]
//     //the comparison would still work though, because i+1 ensures the scan is to the end.
//     if (strarray[i].length > strarray[i + 1].length) {
//       if (longest.length < strarray[i].length) {
//         longest = strarray[i];
//       }
//     } else {
//       if (longest.length < strarray[i + 1].length) {
//         longest = strarray[i + 1];
//       }
//     }
//   }
//   console.log(longest);
//   return longest.length;
// }

// // console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// // console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); //should return 6.
// // console.log(findLongestWord("May the force be with you")); //should return 5.
// // console.log(findLongestWord("Google do a barrel roll")); //should return 6.
// // console.log(findLongestWord("What is the average airspeed velocity of an unladen swallow")); //should return 8.
// // console.log(findLongestWord("What if we try a super-long word such as otorhinolaryngology")); //should return 19.


// // for just finding the maximum length, without returning the longest word:
// function longestWord(str) {
//   var words = str.split(" ");
//   var maxlength = 0;

//   for (var i = 0; i < words.length; i++) {
//     console.log(words[i]);
//     if (words[i].length > maxlength) {
//       maxlength = words[i].length;
//     }
//   }

//   return maxlength;
// }
// // console.log(longestWord("The quick brown fox jumped over the lazy dog"));

// // Another solution, using the Array object's reduce() method:

// function longestWordReduce(str) {
//   return str.split(" ")
//     .reduce(function (x, y) {
//       return Math.max(x, y.length)
//     }, [0]);
// }
// // see: https://forum.freecodecamp.org/t/javascript-array-prototype-reduce/14299
// // AND: https://forum.freecodecamp.org/t/using-array-prototype-reduce-to-reduce-conceptual-boilerplate-for-problems-on-arrays/14687

// // console.log(longestWordReduce("What if we try a super-long word such as otorhinolaryngology"));

// // Advanced solution, seems most efficient because it compares a shorter
// // array each time, using splice to get rid of the parts already compared
// // and found to be shorter

// function findLongestRecursion(str) {
//   // splits each time because of the recursion
//   str = str.split(" ");

//   // if the array resulting from split is just one element long
//   // then that singular element is the longest
//   if (str.length == 1) {
//     return str[0].length;
//   }

//   //compares first two elements; if first is greater, discard second
//   //and pass back to function as argument.
//   if (str[0].length >= str[1].length) {
//     str.splice(1, 1);
//     return findLongestRecursion(str.join(" "));
//   }
//   // if second is greater, cut away the second and subsequent elements
//   // away from the first and pass back to function as argument
//   if (str[0].length <= str[1].length) {
//     return findLongestRecursion(str.slice(1, str.length).join(" "));
//   }
// }

// #############################################################################
//TitleCase A Sentence:
// #############################################################################

// //First Try:
// // function titleCase(str) {
// //   var words = str.split(" ");
// //
// //   for(var i = 0; i < words.length; i++){
// //     var letters = words[i].split('');
// //     letters[0].toUpperCase();
// //     words[i] = letters;
// //   }
// //   str = words.join(" ");
// //   return str;
// // }

// //Second Try:
// // function titleCase(str) {
// //   var words = str.split(" ");
// //
// //   for(var i = 0; i < words.length; i++){
// //     var letters = words[i].split('');
// //     letters[0].toUpperCase();
// //     words[i] = letters.join('');
// //   }
// //   str = words.join(" ");
// //   return str;
// // }

// //Third Try:

// // function titleCase(str) {
// //   var words = str.split(" ");
// //
// //   for(var i = 0; i < words.length; i++){
// //     var letters = words[i].split('');
// //     letters[0].to_s.toUpperCase();
// //     words[i] = letters.join('');
// //   }
// //   str = words.join(" ");
// //   return str;
// // }

// //FourthTry:
// // function titleCase(str) {
// //   var words = str.split(" ");
// //
// //   for(var i = 0; i < words.length; i++){
// //     var letters = words[i].split('');
// //     var firstLetter = letters[0];
// //     letters[0] = firstLetter.toUpperCase();
// //     words[i] = letters.join('');
// //   }
// //   str = words.join(" ");
// //   return str;
// // }

// // My Solution:
// function titleCase(str) {
//   var words = str.toLowerCase().split(" ");

//   for (var i = 0; i < words.length; i++) {
//     var letters = words[i].split('');
//     var firstLetter = letters[0];
//     letters[0] = firstLetter.toUpperCase();
//     words[i] = letters.join('');
//   }
//   str = words.join(" ");
//   return str;
// }

// titleCase("i'm a little tea pot");

// //Review attempt:
// //function titleCase(str) {
// //  var words = str.toLowerCase().split(" ");
// //  for(var i = 0; i < words.length; i++){
// //    var eachWord = words[i];
// //    var lttrs = eachWord.split('');
// //    lttrs[0] = lttrs[0].toUpperCase();
// //    words[i] = lttrs.join('');
// //  }
// //  return words.join(" ");
// //}

// //2017-09-30
// //FCCamp "Basic" solution for TitleCase problem:
// String.prototype.replaceAt = function (index, character) {
//   return this.substr(0, index) + character + this.substr(index + character.length);
// };


// function titleCase(str) {
//   var newTitle = str.split(' ');
//   var updatedTitle = [];
//   for (var st in newTitle) {
//     updatedTitle[st] = newTitle[st].toLowerCase().replaceAt(0, newTitle[st].charAt(0).toUpperCase());
//   }
//   return updatedTitle.join(' ');
// }


// //Intermediate Solution on FCCamp
// function titleCase(str) {
//   var convertToArray = str.toLowerCase().split(" ");
//   var result = convertToArray.map(function (val) {
//     return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
//   });
//   return result.join(" ");
// }

// titleCase("I'm a little tea pot");

// //Advanced solution:
// function titleCase(str) {
//   return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
// }

// //the regex searches from the beginning of the string (^) for a non-whitespace character (\S) that comes only after a whitespace (\s), and the search is global.

// #############################################################################
//Retrieve Largest Numbers from two dimensional Array
// #############################################################################

// //first Try
// function largestOfFour(arr) {
//   var maxNumArr = [];
//   var maxNum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] > maxNum) {
//         maxNum = arr[i][j];
//       }
//     }
//     maxNumArr.push(maxNum);
//     maxNum = 0; //this shouldn't necessarily be set to zero here; could be reset to arr[i][0] at each round above
//   }
//   return maxNumArr;
// }

// //Second try
// function largestOfFour(arr) {
//   var maxNumArr = [];
//   var maxNum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr[i].length; j++) {
//       maxNum = arr[i][0];
//       if (arr[i][j] > maxNum) {
//         maxNum = arr[i][j];
//       }
//     }
//     maxNumArr.push(maxNum);
//   }
//   return maxNumArr;
// }

// #############################################################################
//CONFIRM ENDING
// #############################################################################
// //My Solution
// function confirmEnding(str, target) {
//   var x = target.length;
//   if (str.substr(str.length - x, x) === target) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(confirmEnding("Bastian", "n"));

// //https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-confirm-the-ending/16006
// //[See confirmEnding solutions at link above]

// #############################################################################
//REPEAT STRING
// #############################################################################

function repeatStringNumTimes(str, num) {
  var originalStr = str;
  var count = num - 1;
  if (num > 0) {
    while (count > 0) {
      str += originalStr;
      count--;
    }
  } else {
    str = "";
  }
  return str;
}

repeatStringNumTimes("abc", 3);


// #############################################################################
//TRUNCATE STRING
// #############################################################################

//A2MA - first succesful effort
function truncateString(str, num) {
  var truncStr = str;
  if (str.length > num) {
    if (num > 3) {
      truncStr = str.slice(0, str.length - (str.length - (num - 3))) +
        "...";
    } else {
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

// #############################################################################
//SPLIT ARRAY INTO 2D ARRAY
//2017-12-07
// #############################################################################

//attempt 0.1
//function chunkArrayInGroups(arr, chunkSize){
//    arrSliced = [];
//    for(var i = 0; i < arr.length; i + chunkSize){
//        arrSliced.push(arr.slice(i, chunkSize));
//    }
//
//    return arrSliced;
//}

//FCC says: potential infinite loop. I had some confusion with the loop, with i, and with the start and end of the slice function.

//Final:
function chunkArrayInGroups(arr, chunkSize) {
  arr2 = [];
  var start = 0;
  var end = 0;
  for (var i = 0; i < arr.length; i += chunkSize) {
    end += chunkSize;
    miniArr = arr.slice(start, end);
    arr2.push(miniArr);
    start += chunkSize;
  }

  return arr2;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);


// #############################################################################
//COMPARE FIRST TWO STRINGS IN AN ARRAY
//2018-01-01
// #############################################################################

function mutation(arr) {
  var match = true;
  var first = arr[0].toLowerCase();
  var second = arr[1].toLowerCase();

  for (var i = 0; i < second.length; i++) {
    var result = first.indexOf(second[i]);
    if (result != -1) {
      match = true;
    } else {
      match = false;
      break;
    }
  }
  return match;
}

mutation(["hello", "hey"]);

// #############################################################################
//Remove all Falsy Values from Array
// #############################################################################

//ATTEMPT 1
//function bouncer(arr) {
//  // Don't show a false ID to this bouncer.
//    var filtered = arr.filter(new Boolean(element) != false);
//    return arr;
//}

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var filtered = arr.filter(Boolean);
  return filtered;
}

//OR

function bouncer2(arr) {
  // Don't show a false ID to this bouncer.
  var filtered = arr.filter(function (v) {
    return !!v;
  });
  return filtered;
}

//bouncer([7, "ate", "", false, 9]);
//bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9];
//bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
//bouncer([false, null, 0, NaN, undefined, ""]) should return [].
//bouncer([1, null, NaN, 2, undefined]) should return [1, 2].


// #############################################################################
//Filter certain Values from Array
// #############################################################################

function destroyer(arr) {
  // Remove all the values
  var rawArr = arguments[0];
  console.log(arguments);
  //   console.log(arg1);
  //   console.log(arg2);
  var filtArr = rawArr;

  for (var i = 1; i < arguments.length; i++) {
    filtArr = filtArr.filter(element => element != arguments[i]);
  }

  console.log(filtArr);
  console.log(rawArr);
  return filtArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);



// #############################################################################
//Find Place of Value in Array
// #############################################################################
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.

  var placement;

  arr.sort(function (a, b) {
    return a - b;
  });


  for (var i = 0; i < arr.length; i++) {
    if (arr[i] - num >= 0) {
      placement = i;
      break;
    }
    placement = i + 1;
  }

  return placement;
}

getIndexToIns([40, 60], 50);


// #############################################################################
//Binary Search Implementation in JavaScript
// #############################################################################
/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */

/* var doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
    var guess = -1;

    while(max >= min){
        guess = Math.floor((min + max) / 2);
        println(max);
        println(min);
        // println(guess);
        // println(array[guess]);
        if(array[guess] === targetValue){
            min = guess + 1;
        }else if(array[guess] < targetValue){
            min = guess + 1;
        }else{
            max = guess - 1;
        }
    }

	return guess;
}; */

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
  41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

// var result = doSearch(primes, 73);
// println("Found prime at index " + result);

// Program.assertEqual(doSearch(primes, 73), 20);


/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */

var doSearch = function (array, targetValue) {
  var min = 0;
  var max = array.length - 1;
  var guess = -1;

  while (max >= min) {
    guess = Math.floor((min + max) / 2);
    // println(max);
    // println(min);
    // println(guess);
    // println(array[guess]);
    if (array[guess] === targetValue) {
      return guess;
    } else if (array[guess] < targetValue) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }

  return -1;
};

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
  41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

// var result = doSearch(primes, 73);
// println("Found prime at index " + result);

Program.assertEqual(doSearch(primes, 73), 20);


// #############################################################################
//Deciphering a message encoded by the Caesar cipher
// #############################################################################

function rot13(str) { // LBH QVQ VG!
  var original = [];
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 65 && str.charCodeAt(i) < 90) {
      //     var test = "Z";
      //     console.log(test.charCodeAt(0));
      var code = str.charCodeAt(i) - 13;
      original.push(String.fromCharCode(code));
    }
  }
  str2 = original.toString();
  return str2;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

FINAL:
function rot13(str) { // LBH QVQ VG!
  var original = [];
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      //     var test = "Z";
      //     console.log(test.charCodeAt(0));
      var code = str.charCodeAt(i) - 13;
      if (code < 65) {
        var diff = 65 - code;
        code = 91 - diff;
      }
      original.push(String.fromCharCode(code));
    } else {
      original.push(str[i]);
    }
  }
  str2 = original.join("");
  return str2;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC.");
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");


// #############################################################################
//REVIEW: isEven, factorial, replace characters with regex 2018-06-26, CSteele Web Dev Bootcamp, Udemy
// #############################################################################

function isEven(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

function isEvenShorter(num) {
  return num % 2 == 0;
}

//recursive factorialization
function factorialRecursive(num) {
  if (num > 1) {
    return num * (factorialRecursive(num - 1));
  } else if (num = 1) {
    return 1;
  } else {
    return "Error";
  }
}

function factorial(num) {
  var result = 1;
  for (var i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}


function kebabToSnake(str) {
  return str.replace(/-/g, '_');
}

// #############################################################################
//Basic JS Objects: record collection, 2019-01-08, FreeCodeCamp
// #############################################################################

// Setup
var collection = {
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [
      "1999",
      "Little Red Corvette"
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": []
  },
  "5439": {
    "album": "ABBA Gold"
  }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  if (prop == 'tracks' && value != '') {
    if (!collection[id].hasOwnProperty(prop)) {
      collection[id][prop] = [];
      collection[id][prop].push(value);
    } else {
      collection[id][prop].push(value);
    }
  } else if (!collection.hasOwnProperty(prop) && value != '') {
    collection[id][prop] = value;
  } if (value == '') {
    delete collection[id][prop];
    console.log(collection[id]);
  }
  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
updateRecords(2548, "artist", "");


/* #############################################################################
Do...While, 2019-01-09, FreeCodeCamp
Notes: stub
#############################################################################*/

/* #############################################################################
parseInt, 2019-01-10, FreeCodeCamp
Notes: parseInt takes a string, parses it, and returns an integer. parseInt also has the radix argument,
which tells you the base of the number in the string. The radix can range from 2 to 26; if 2, it is binary, for example,
and the string will be read as binary and then returned as a (base 10) number.
#############################################################################*/
function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56");


/* #############################################################################
Ternary Operator, 2019-01-10, FreeCodeCamp
Notes: short version of if else. Syntax: condition ? <statement if true>: <statement if false>;.
Chaining together ternary operators can achieve the effect of if-else if-else:
(condition if) ? <statement> : (condition else if) ? <statement> : <statement for else>;
#############################################################################*/


// regular ternary example
function checkEqual(a, b) {
  return a == b ? true : false;
}

checkEqual(1, 2);

// chained ternary example
function checkSign(num) {
  return (num > 0) ? "positive" : (num == 0) ? "zero" : "negative";
}

checkSign(10);

/* #############################################################################
If statements, comparison, 2019-01-10, FreeCodeCamp
Notes:
#############################################################################*/

// smart testing for undefined/defined variable:
if (typeof id !== 'undefined') {
  console.log(`The id is ${id}`);
} else {
  console.log('No id. ')
}

// ##############################################################################################

// ES6

// ##############################################################################################

/* #############################################################################
ES6 Write Higher Order Arrow Functions, 2019-01-22, FreeCodeCamp
Notes:
#############################################################################*/
// // const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
// const squareList = (arr) => {
//   "use strict";
//   // change code below this line
//   const squaredIntegers = arr.filter((num) => num > 0 && num %1 == 0).map((num)=> num**2);
//   // change code above this line
//   return squaredIntegers;
// };
// // test your code
// const squaredIntegers = squareList(realNumberArray);
// console.log(squaredIntegers);

// OR
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = (arr.filter((num) => num > 0 && num % 1 === 0)).map((num) => Math.pow(num, 2));
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

/* #############################################################################
ES6 Example of setting default parameter, 2019-01-26, FreeCodeCamp
Notes:
#############################################################################*/

const increment = (function () {
  "use strict";
  return function increment(number, value = 1) {
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6\

/* #############################################################################
ES6 Example of using rest operator to handle variable number of arguments held in an array 2019-01-26, FreeCodeCamp
Notes:
#############################################################################*/


// BEFORE
// const sum = (function() {
//   "use strict";
//   return function sum(x, y, z) {
//     const args = [ x, y, z ];
//     return args.reduce((a, b) => a + b, 0);
//   };
// })();
// console.log(sum(1, 2, 3)); // 6

// AFTER

const sum = (function () {
  "use strict";
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5));

/* #############################################################################
2019-01-29 - ES6 Example of using destructuring to swap two values, FreeCodeCamp
Notes:
#############################################################################*/

let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  [a, b] = [b, a];
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8

/* #############################################################################
2019-01-30 - ES6 Example of using destructuring to obtain part of an array, FreeCodeCamp
Notes:
#############################################################################*/

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
  const [a, b, ...arr] = source; // change this
  // change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];

/* #############################################################################
2019-02-01 - ES6 using destructuring to obtain part of an object, by passing it through or in-place. - FreeCodeCamp
Notes:
#############################################################################*/

/*
// passing through, then destructuring
const profileUpdate = (profileData) => {
  const {name, age, nationality, location } = profileData;
  // etc.
}
// destructuring in place
const profileUpdate = ({name, age, nationality, location }) => {
  // etc.
}
*/

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function () {
  "use strict"; // do not change this line

  // change code below this line
  return function half({ max, min }) {
    // use function argument destructuring
    return (max + min) / 2.0;
  };
  // change code above this line

})();
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015


// // Create strings with template literals
// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["id-blacklist", "no-dup-keys"]
// };

function makeList(arr) {
  "use strict";

  // change code below this line
  const resultDisplayArray = [`<li class="text-warning">${arr[0]}</li>`, `<li class="text-warning">${arr[1]}</li>`, `<li class="text-warning">${arr[2]}</li>`];
  // change code above this line

  return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`,
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray);

/* #############################################################################
2019-02-02 - ES6 concise object literal declaration - FreeCodeCamp
Notes:
#############################################################################*/

const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  return {
    name,
    age,
    gender
  };
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object

/* #############################################################################
2019-02-02 - ES6 removal of requirement for function keyword when defining function w/in object - FreeCodeCamp
Notes:
#############################################################################*/


// change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  }
};
// change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);

/* #############################################################################
2019-02-03 - ES6 class syntax usage - FreeCodeCamp
Notes:
#############################################################################*/

class Vegetable {
  "use strict";
  /* Alter code below this line */
  constructor(name) {
    this.name = name;
  }
  /* Alter code above this line */
}

const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'

/* #############################################################################
2019-02-04 - ES6 getter and setter - FreeCodeCamp
Notes:
#############################################################################*/

function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat {
    constructor(fahrenheit) {
      this._fahrenheit = fahrenheit;
    }

    get temperature() {
      return (this._fahrenheit - 32) * 5 / 9;
    }

    set temperature(updatedTemp) {
      this._fahrenheit = (updatedTemp * 9.0 / 5) + 32;
    }
  }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
console.log(temp);

// ##############################################################################################################

// Regular Expressions

// ##############################################################################################################


/* #############################################################################
2019-02-18 - RegEx example for range of alphabetical characters - FreeCodeCamp
Notes:
#############################################################################*/

// let quoteSample = "The quick brown fox jumps over the lazy dog.";
// let alphabetRegex = /[a-z]/gi; // Change this line
// let result = quoteSample.match(alphabetRegex); // Change this line

/* #############################################################################
2019-02-19 - RegEx example for range of alphabetical characters and numerals - FreeCodeCamp
Notes:
#############################################################################*/

// let quoteSample = "Blueberry 3.141592653s are delicious.";
// let myRegex = /[h-s2-6]/gi; // Change this line
// let result = quoteSample.match(myRegex); // Change this line

/* #############################################################################
2019-02-19 - RegEx example of exclusion - FreeCodeCamp
Notes:
#############################################################################*/

let quoteSample = "3 blind mice.";
let myRegex = /[^\d^aeiou]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
console.log(result);

/* #############################################################################
2019-02-19 - RegEx example of matching one or more consecutively recurring characters - FreeCodeCamp
Notes:
#############################################################################*/

let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);
console.log(result);

/* #############################################################################
2019-02-19 - RegEx example of finding a character that occurs zero or more times, consecutively - FreeCodeCamp
Notes:
#############################################################################*/

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // Change this line
let result = chewieQuote.match(chewieRegex);
console.log(result);

/* #############################################################################
2019-02-20 - RegEx example of finding lazy match - FreeCodeCamp
Notes:
#############################################################################*/

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);
console.log(result);

/* #############################################################################
2019-02-20 - RegEx exercise - FreeCodeCamp
Notes:
#############################################################################*/

// example crowd gathering
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /C+/g; // Change this line

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);

/* #############################################################################
2019-02-20 - RegEx example: finding a term only at the beginning of a searched value - FreeCodeCamp
Notes:
#############################################################################*/

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);

/* #############################################################################
2019-02-25 - RegEx exercise: username validation: 
1) The only numbers in the username have to be at the end. There can be zero or more of them at the end.
2) Username letters can be lowercase and uppercase.
3) Usernames have to be at least two characters long. A two-letter username can only use alphabet letter characters.
- FreeCodeCamp
Notes:
#############################################################################*/

let username = "007";
let userCheck = /[a-z][a-z]+|[a-z]+[\d*$]/i; // Change this line
let result = userCheck.test(username);
let resultText = username.match(userCheck);
console.log(resultText);

/* #############################################################################
2019-02-26 - RegEx example: finding whitespace - FreeCodeCamp
Notes:
#############################################################################*/

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);
console.log(result);

/* #############################################################################
2019-02-26 - RegEx example: finding inverse whitespace - FreeCodeCamp
Notes:
#############################################################################*/

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);

/* #############################################################################
2019-02-26 - RegEx example: finding a range of occurrences of a target, finding a specific number - FreeCodeCamp
Notes:
#############################################################################*/

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // Change this line
let result = ohRegex.test(ohStr);

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);

let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);

/* #############################################################################
2019-02-26 - RegEx example: marking a target item as optional with ? immediately succeeding. - FreeCodeCamp
Notes:
#############################################################################*/

let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);

/* #############################################################################
2019-02-26 - RegEx example: lookaheads, positive and negative; using positive lookaheads to check
password for length and for at least two numbers. - FreeCodeCamp
Notes:
#############################################################################*/

let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=[\D]*\d\d)/; // Change this line
let result = pwRegex.test(sampleWord);

/* #############################################################################
2019-02-26 - RegEx exercise: using capture groups with back-reference - FreeCodeCamp
Notes:
#############################################################################*/

let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result = reRegex.test(repeatNum);
let resultText = repeatNum.match(reRegex);
console.log(resultText);

let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["regex regex", "regex"]
console.log(repeatStr.match(repeatRegex));

/* #############################################################################
2019-02-26 - RegEx example: calling :replace() on a string - FreeCodeCamp
Notes:
#############################################################################*/

let huhText = "This sandwich is good.";
let fixRegex = /good/; // Change this line
let replaceText = "okey-dokey"; // Change this line
let result = huhText.replace(fixRegex, replaceText);

/* #############################################################################
2019-02-26 - RegEx exercise: calling :replace() on a string to strip whitespace - FreeCodeCamp
Notes: review later; why is g necessary?
#############################################################################*/

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ''); // Change this line
console.log(result);


// ##############################################################################################################

// Debugging*
// *No notes or work taken.

// ##############################################################################################################


// ##############################################################################################################

// Basic Data Structures

// ##############################################################################################################

/* #############################################################################
2019-02-26 - using Array.reduce - FreeCodeCamp
Notes: 
#############################################################################*/

let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) => previous + current);
console.log(`Sum of array values is: ${arraySum}`);

/* #############################################################################
2019-02-26 - creating a matrix - FreeCodeCamp
Notes: 
#############################################################################*/

function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray
    row = [];
    console.log('i is' + i)
    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
      console.log('j is' + j)
      console.log(row);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
    console.log(newArray);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

/* #############################################################################
2019-03-05 - :splice() - FreeCodeCamp
Notes: for the previous basic data structure sections (:push(), :unshift(), :pop(), :shift()) see
B5h-a
#############################################################################*/

// :splice(<starting index>, <number of elements to delete>, <optional: elements to replace removed elements>);
// num of elements to delete includes the first.
//:splice() returns a new array of the removed elements.

function htmlColorNames(arr) {
  // change code below this line
  arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond')
  // change code above this line
  return arr;
}

// do not change code below this line
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));


/* #############################################################################
2019-03-07 - :slice() - FreeCodeCamp
Notes: see B5h
#############################################################################*/

function forecast(arr) {
  // change code below this line
  let arrPortion = arr.slice(2, 4);
  return arrPortion;
}

// do not change code below this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

/* #############################################################################
2019-03-07 - copy array with spread operator- FreeCodeCamp
Notes: see B5h
#############################################################################*/

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // change code below this line
    newArr.push([...arr]);
    // change code above this line
    num--;
  }
  return newArr;
}

// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));

/* #############################################################################
2019-04-13 - combine arrays with spread operator - FreeCodeCamp
Notes: see B5h
#############################################################################*/

function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun']; // change this line
  return sentence;
}

// do not change code below this line
console.log(spreadOut());


/* #############################################################################
2019-04-16 - find an element in an array with indexOf() - FreeCodeCamp
Notes: see B5h
#############################################################################*/
function quickCheck(arr, elem) {
  // change code below this line
  if (arr.indexOf(elem) == -1) {
    return false;
  } else {
    return true;
  }
  // change code above this line
}

// change code here to test different cases:
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

/* #############################################################################
2019-04-19 - iteration with for loop - FreeCodeCamp
Notes: see B5h
#############################################################################*/

function filteredArray(arr, elem) {
  let newArr = [];
  // change code below this line
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]);
    }

  }
  // change code above this line
  return newArr;
}

// change code here to test different cases:
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));
console.log(filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2));
console.log(filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter"));

/* #############################################################################
2019-04-21 - objects: nesting, access with dot and bracket notations - FreeCodeCamp
Notes: see B5h
#############################################################################*/

let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// change code below this line
// userActivity.data.online = 45;
userActivity['data']['online'] = 45;
// change code above this line

console.log(userActivity);

/* #############################################################################
2019-04-21 - objects: delete keyword - FreeCodeCamp
Notes: see B5h
#############################################################################*/


let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// change code below this line
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
// change code above this line

console.log(foods);


/* #############################################################################
2019-04-21 - objects: check object for property - FreeCodeCamp
Notes: see B5h
#############################################################################*/

// My Solution 

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

// function isEveryoneHere(obj) {
//   // change code below this line
//   if (users.hasOwnProperty('Alan') && users.hasOwnProperty('Jeff') && users.hasOwnProperty('Sarah')
//     && users.hasOwnProperty('Ryan')) {
//     return true;
//   }
//   return false;
//   // change code above this line
// }

console.log(isEveryoneHere(users));

// Better solution 

function isEveryoneHere(obj) {
  // change code below this line
  if (users.hasOwnProperty('Alan', 'Sarah', 'Ryan', 'Jeff')) {
    return true;
  }
  return false;
  // change code above this line
}

// best solution

function isEveryoneHere(obj) {
  // change code below this line
  return users.hasOwnProperty('Alan', 'Sarah', 'Ryan', 'Jeff') ? true : false;

  // if (users.hasOwnProperty('Alan', 'Sarah', 'Ryan', 'Jeff')) {
  //   return true;
  // }
  // return false;
  // change code above this line
}

/* #############################################################################
2019-04-25 - objects: iterate through keys with for...in - FreeCodeCamp
Notes: see B5h
#############################################################################*/

// FreeCodeCamp NOTE:
// Objects do not maintain an ordering to stored keys like arrays do; thus a keys position on an object, or the relative order in which it appears, is irrelevant when referencing or accessing that key.

function countOnline(obj) {
  // change code below this line
  let usersOnline = 0;
  for (let user in obj) {
    if (obj[user].online == true) {
      usersOnline += 1;
    };
  };
  return usersOnline;
  // change code above this line
}

console.log(countOnline(users));
console.log(users.Jeff.online === false);

/* #############################################################################
2019-05-03 - generate array from object's keys; order is not specified. - FreeCodeCamp
Notes: see B5h
#############################################################################*/

function getArrayOfUsers(obj) {
  // change code below this line
  return Object.keys(obj);
  // change code above this line
}


// ##############################################################################################################

// Basic Algorithm Scripting

// ##############################################################################################################

/* #############################################################################
2019-05-04 - basic algorithm scripting: Convert Celsius to Fahrenheit - FreeCodeCamp
Notes: shown on FCCamp as finished, but I can't find it in my notes or this file,
so I'll do it again.
#############################################################################*/

function convertToF(celsius) {
  let fahrenheit;
  fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}

console.log(convertToF(30));
console.log(convertToF(0));
console.log(convertToF(-30));
console.log(convertToF(-10));
console.log(convertToF(20));

/* #############################################################################
2019-05-04 - basic algorithm scripting: Reverse a string - FreeCodeCamp
Notes: shown on FCCamp as finished, but I can't find it in my notes or this file,
so I'll do it again.
#############################################################################*/

function reverseStringShort(str) {
  return str.split('').reverse().join('');
}

reverseString("hello");

LONGER
function reverseStringLong(str) {
  var array = str.split('');
  var reversedArray = array.reverse();
  reversedString = reversedArray.join('');
  return reversedString;
}

/* #############################################################################
2019-05-04 - basic algorithm scripting: Factorialize - FreeCodeCamp
Notes: shown on FCCamp as finished, but I can't find it in my notes or this file,
so I'll do it again.
#############################################################################*/


function factorialize(num) {
  if (num == 0) {
    return 1;
  } else {
    return num * factorialize(num - 1);
  }
}

console.log(factorialize(5));


/* #############################################################################
2019-05-04 - basic algorithm scripting: finding the first number that satisfies a condition. - FreeCodeCamp
Notes: see B5h
#############################################################################*/



function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i]) == true) {
      num = arr[i];
      break;
    } else {
      num = undefined;
    }
  }
  console.log(num);
  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

/* #############################################################################
2019-05-04 - check if value is classified as boolean primitive - FreeCodeCamp
Notes: see B5h
#############################################################################*/

function booWho(thing) {
  let bool;
  if (typeof thing == "boolean") {
    bool = true;
  } else {
    bool = false;
  }
  return bool;
}

booWho(null);
booWho(true);
booWho([1, 2, 3]);
booWho(1);

/* #############################################################################
2019-05-04 - :slice() and :splice() - FreeCodeCamp
Notes: see B5h
#############################################################################*/

function frankenSplice(arr1, arr2, n) {
  let splicedArr = arr2.slice(0);
  for (let i = 0; i < arr1.length; i++) {
    splicedArr.splice(n + i, 0, arr1[i]);
  }
  return splicedArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
console.log(frankenSplice([1, 2, 3], [4, 5], 1));


// ##############################################################################################################

// Object Oriented Programming

// ##############################################################################################################

/* #############################################################################
// // ES5 and ES2015 - constructors
#############################################################################*/

// const something = {
//   name: 'something',
//   age: 17289403
// }

// constructor

// function Person(name){
//     this.name = name;
//     console.log(this);
// }

// function Person(name, dob){
//     this.name = name;
//     this.birthday = new Date(dob);
//     this.calcAge = function(){
//         const diff = Date.now() - this.birthday.getTime(); // figuring out the difference between now and time at birth
//         console.log(diff);
//         const ageDate = new Date(diff); // calculating time between now and birth as if it were from 1970
//         console.log(ageDate);
//         console.log(ageDate.getUTCFullYear());
//         return Math.abs(ageDate.getUTCFullYear() - 1970); // converting to years, taking away 1970 to get the difference between now and birth in years.
//     };
// }

// const henry = new Person('Henry');
// const pavlov = new Person('Pavlov', '9-26-1849'); // M-DD-YYYY does not work in firefox, works in chrome 
// const marietta = new Person('Marietta', '9-26-2000');
// const brad = new Person('Brad', '9-10-1981');
// const martius = new Person('Martius', '1981-10-10'); // YYYY-MM-DD works in firefox and chrome

// // 'this' in the global scope refers to Window

// // JavaScript built in constructors

// // String
// const name1 = 'Publius'; // creates a string
// const name2 = new String('Publius'); // creates an object of the String class.
// console.log(typeof name1); // string
// console.log(typeof name2); // object - meaning CANNOT compare with === to a string, but can compare with == which checks just value not type

// // Number
// const num1 = 5; // creates a number
// const num2 = new Number(5); // creates an object of the Number class.

// // Boolean
// const bool1 = true; // creates a number
// const bool2 = new Boolean(true); // creates an object of the Number class.

// // Function
// const getSum1 = function(x, y) {
//     return x + y;
// }

// const getSum2 = new Function('x', 'y', 'return x + y');

// // Objects
// const yara = {name: 'Yara'};
// const yara2 = new Object({name: 'Yara'});
// console.log(yara2);

// // Arrays
// const arr1 = [1, 2, 3, 4, 5, 6];
// const arr2 = new Array(1, 2, 3,4,5, 6);
// console.log(arr2);

// // Regular expressions
// const re1 = /\w+/;
// const re2 = new RegExp ('\\w+'); // have to escape with the constructor

/* #############################################################################
// // ES5 and ES2015: Prototypes
#############################################################################*/
// // object literals from Object.prototype
// // creating an object from a constructor: Constructor.prototype
// // prototype chain: can go up from Constructor.prototype to Object.prototype

// function Person(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
//     // this.calcAge = function(){
//     //     const diff = Date.now() - this.birthday.getTime(); // figuring out the difference 
//     //     const ageDate = new Date(diff); // calculating time between now and birth as if it were from 1970
//     //     return Math.abs(ageDate.getUTCFullYear() - 1970); // converting to years, taking away 1970 to get the difference between now and birth in years.
//     // };
// }

// // functions that would be repeated across different objects can be placed in
// // a prototype instead of the constructor:
// Person.prototype.calcAge = function () {
//     const diff = Date.now() - this.birthday.getTime(); // figuring out the difference 
//     const ageDate = new Date(diff); // calculating time between now and birth as if it were from 1970
//     return Math.abs(ageDate.getUTCFullYear() - 1970); // converting to years, taking away 1970 to get the difference between now and birth in years.
// };

// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// }

// // this can still be called in the old way: hala.calcAge(), rashed.calcAge().

// const hala = new Person('Hala', 'Hammoud', '8-12-90');
// const rashed = new Person('Rashed', 'Zaidoun', 'April 15 1987');

// // gets married
// Person.prototype.getsMarried = function(newLastName) {
//     this.lastName = newLastName;
// }


// // hasOwnProperty
// console.log(hala.hasOwnProperty('firstName')); // returns true
// console.log(hala.hasOwnProperty('getFullName')); // returns false

//Objects can hold methods.

/* #############################################################################
// // ES5 and ES2015: Constructor
#############################################################################*/

// function Dog(name, color) {
//   this.name = name;
//   this.color = color;
//   this.numLegs = 4;
// }

// let terrier = new Dog('Donato', 'Puce');
// console.log(terrier.name);

// function House(numBedrooms) {
//   this.numBedrooms = numBedrooms;
// }

// // Add your code below this line
// let myHouse = new House(9);
// myHouse instanceof House;

/* #############################################################################
// // ES5 and ES2015: Prototypal Inheritance
#############################################################################*/

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Person.prototype.greeting = function () {
//   return `Hello there, from ${this.firstName} ${this.lastName}.`;
// }

// person1 = new Person('Adam', 'Sayyad');

// // customer constructor using Person constructor
// function Customer(firstName, lastName, phoneNumber, membership) {
//   Person.call(this, firstName, lastName);
//   this.phoneNumber = phoneNumber;
//   this.membership = membership;
// }

// // inheriting Person prototype methods
// Customer.prototype = Object.create(Person.prototype);

// // make customer.prototype return Customer()
// Customer.prototype.constructor = Customer;

// customer1 = new Customer('Adil', 'Waddah', '614-908-7654', 'Standard');

// // override with new customer greeting
// Customer.prototype.greeting = function () {
//   return `Hello there, ${this.firstName} ${this.lastName}. Welcome to our company!`;
// }

// using Object.create

// const personPrototypes = {
//   greeting: function () {
//     return `Hello, ${this.firstName} ${this.lastName}`;
//   },
//   getsMarried: function (newLastName) {
//     this.lastName = newLastName;
//   }
// }

// const hind = Object.create(personPrototypes);
// hind.firstName = 'Hind';
// hind.lastName = 'Umara';
// hind.age = 45;

// // can call the function from prototype:
// console.log(hind.greeting());

// hind.getsMarried("Still Umara");

// console.log(hind.greeting());

// // Object.create can take in another argument, an object of values
// const jabir = Object.create(personPrototypes, {
//   firstName: { value: 'Jabir' },
//   lastName: { value: 'Rassas' },
//   age: { value: 32 }
// });

/* #############################################################################
// // ES6 way of making classes: syntactic "sugar" or cover over the ES5 ways.
#############################################################################*/

// // // CLASS DECLARATION IN ES2015 suggested by VSCode:
// // class Person {
// //     constructor(firstName, lastName) {
// //         this.firstName = firstName;
// //         this.lastName = lastName;
// //     }
// //     greeting() {
// //     }
// // }

// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//   }

//   greeting() {
//     return `Hello there, ${this.firstName} ${this.lastName}!`
//   }

//   calculateAge() {
//     const diff = Date.now() - this.dob.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   }

//   getsMarried(newLastName) {
//     this.lastName = newLastName;
//   }

//   // static methods: use without instantiating Object
//   static addNum(x, y) {
//     return x + y;
//   }
// }

// const rabia = new Person('Rabia', 'Chawdhry', '6/30/1990');

// rabia.getsMarried('Henderson');

// console.log(Personl.addNum(1, 2));

// // 
// // sub classes

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   greeting() {
//     return `Hello there, ${this.firstName} ${this.lastName}!`;
//   }
// }

// class Customer extends Person {
//   constructor(firstName, lastName, phone, membership) {
//     super(firstName, lastName);
//     this.phone = phone;
//     this.membership = membership;
//   }

//   static getMembershipCost() {
//     if (this.membership == 'Deluxe') {
//       return 500;
//     } else {
//       return 200;
//     }
//   }
// }

// const abed = new Customer('Abed', 'Amro', '456-852-8974', 'Deluxe');

// // can use methods extended from parent class

// ##############################################################################################################

// Async Foundations
// CSteele Web Dev Bootcamp, Udemy

// ##############################################################################################################

// // forEach implementation, 2018-06-26, 

// function myForEach(arr, func) {
//   for (var i = 0; i < arr.length - 1; i++) {
//     func(arr[i]);
//   }
// }

// // Array.prototype.myForEach = function(func){
// //   for(var i = 0; i < this.length; i++){
// //     func(this[i]);
// //   }
// // }

// // implementation of findIndex
// function findIndex(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i], i, arr)) {  //  === true not necessary
//       return i;
//     }
//   }
//   return -1;
// }

// ##############################################################################################################

// Browser Practice

// ##############################################################################################################

// let someWord = 'difficult';
// // undefined
// someWord[0].toUpperCase();
// // "D"
// someWord
// // "difficult"
// someWord.slice(1);
// // "ifficult"
// someWord
// // "difficult"
// let someSentence = 'This is a sentence, pretty and bold.';
// someSentence.split(" ");
// // returns Array(7)["This", "is", "a", "sentence,", "pretty", "and", "bold."]
// let body = document.querySelector('body');
// function randNum() { return Math.round(Math.random() * 255); }
// setInterval(function () { body.style.backgroundColor = `rgb(${randNum()}, ${randNum()}, ${randNum()})` }, 500);


// // Browser Countdown Practice
// let seconds = prompt("Count down from how many seconds?");

// function printTime(seconds) {
//   let intervalId = setInterval(
//     function () {
//       if (seconds <= 0) {
//         console.log("Ring Ring Ring!!!")
//         clearInterval(intervalId);
//       } else {
//         console.log("Time remaining: " + seconds);
//       }
//       seconds--;
//     }, 1000);
// }

// printTime(seconds);


// ##############################################################################################################

// Algorithms in JavaScript

// ##############################################################################################################

// This function partitions given array and returns 
//  the index of the pivot.
var partition = function (array, p, r) {
  // KA: This code has been purposefully obfuscated,
  // KA: as you will implement it yourself in next challenge
  var e = array, t = p, n = r; var r = function (e, t, n) { var r = e[t]; e[t] = e[n]; e[n] = r; }; var i = t; for (var s = t; s < n; s++) { if (e[s] <= e[n]) { r(e, s, i); i++; } } r(e, n, i); return i;
};

var quickSort = function (array, p, r) {
  if (p < r) {
    var pivot = partition(array, p, r);
    quickSort(array, p, pivot - 1);
    quickSort(array, pivot + 1, r);
  }
};

var array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
quickSort(array, 0, array.length - 1);
println("Array after sorting: " + array);
Program.assertEqual(array, [2, 3, 5, 6, 7, 9, 10, 11, 12, 14]);

var array2 = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6, 90, 0];
quickSort(array2, 0, array2.length - 1);
println("Array after sorting: " + array2);
Program.assertEqual(array2, [0, 2, 3, 5, 6, 7, 9, 10, 11, 12, 14, 90]);