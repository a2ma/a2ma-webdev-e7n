
/* ##############################################################################################
2019-03-05 - Window Interface - Traversy. JavaScript Basics. 2017?. Udemy.
Notes: 
##############################################################################################*/
// WINDOW METHODS, OBJECT, PROPERTIES

// console.log('Demo of Window interface capabilites.');

//Alert
// alert("Hello to this demo of the JS Window interface.");

// Prompt
// const input = prompt('What would you like the page to say?');
// alert(input);

// confirm
// if(confirm('Are you sure about that?')){alert('Successfully confirmed.')};

// let winHeightOuter;
// let winWidthOuter;

// // Outer height and width
// winHeightOuter = window.outerHeight;
// winWidthOuter = window.outerWidth;

// console.log(`Outer window dimensions: ${winHeightOuter} x ${winWidthOuter}`);

// // Inner height and width
// winHeightInner = window.innerHeight;
// winWidthInner = window.innerWidth;


// console.log(`Inner window dimensions: ${winHeightInner} x ${winWidthInner}`);

// Scroll points
// console.log(window.scrollY);
// console.log(window.scrollX);

// Location object
// console.log(`Your location is: ${window.location}`);
// console.log(window.location);
// console.log(window.location.hostname);
// console.log(window.location.port);
// console.log(window.location.href);
// console.log(window.location.search);

// if(confirm('Navigate to Google?')){
//     window.location.href = 'https://google.com';
// };

//window.location.reload();

// History object
// window.history.go(); //takes a negative number which is the number of previous pages to trace back
// window.history.length;


// window.navigator;
// window.navigator.appName;
// window.navigator.appVersion;
// window.navigator.userAgent;
// window.navigator.platform;
// window.navigator.vendor;
// window.navigator.language;

/* ##############################################################################################
2019-03-05 - Window Interface - Traversy. JavaScript Basics. 2017?. Udemy.
Notes: 
##############################################################################################*/

// var a = 1;
// let b = 2;
// const c = 3;

// function test() {
//     var a = 1;
//     let b = 2;
//     const c = 3;
//     console.log('Function scope: ' + a, b, c );
// }
// //does not change var

// test();

// if(true){
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log('Block (if) scope: ' + a, b, c );
// }

// // var is changed globally

// for(var a = 0; a < 10; a++){
//     console.log(`For Loop: ${a}`)
// }
// // changes var

// console.log('Global scope: ' + a, b, c );

// // let and const: block level scop; var: function level scope

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li){
    li.style.background = "red";
});

for(let i = 0; i < liEven.length; i++){
    liEven[i].style.background = 'blue';
    liEven[i].style.color = 'white';
}


