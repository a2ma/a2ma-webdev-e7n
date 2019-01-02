
// function createParagraph() {
//     let para = document.createElement('p');
//     para.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ad commodi possimus tempore. Repellat accusamus fuga debitis, molestias laborum porro saepe facere. Magni, tenetur. Incidunt sapiente cumque reprehenderit recusandae, quam labore ratione culpa, dolorum officiis accusantium aperiam ea debitis velit laborum voluptatibus quaerat blanditiis error pariatur, ullam quasi. Aspernatur error pariatur, nam nostrum eaque harum sunt porro voluptas suscipit dignissimos architecto voluptate? Ea eum ipsam possimus corporis aperiam quis ut ducimus quidem totam tempora cupiditate explicabo rerum repellat maxime nostrum, a, mollitia consectetur at quod velit sapiente accusantium! Odit cum fugit repudiandae reprehenderit quae, maxime doloremque numquam optio expedita voluptas nostrum repellat eos. Delectus, nesciunt quos! Nostrum dignissimos, dolorem quas architecto nobis incidunt dolor ab obcaecati similique fuga sequi ipsum.';
//     document.body.appendChild(para);
// }
// const buttons = document.querySelectorAll('button');

// for(let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', createParagraph);
// }


let val;

val = 5;

console.log(typeof val);

val = String(5);

val = (5).toString();

val = Number('5'); // 5

val = Number(true); // gives 1
val = Number(false); // gives 0
val = Number(null); // also gives 0
val = Number('Some string'); // gives NaN
val = Number([1, 2, 3, 4, 5]); // gives NaN


val = parseInt('100.30'); // returns 100
val = parseFloat('100.33'); // returns 100.3
val = val.toFixed(2); // to get 2 more spaces

// type coercion - when JS engine auto converts one data type to another

// Math Object
Math.PI
Math.E
Math.round() // rounds up or down depending on decimal
Math.ceil() // rounds up always
Math.floor() // rounds down always
Math.sqrt()
Math.abs()
Math.pow(2, 2);
Math.min()
Math.max()

// randomNumber = Math.floor(Math.random() * 10 + 1);

// console.log(randomNumber);


// Strings

let stringVal = 'some string';

stringVal = stringVal.concat(' ', 'and some concatenated material');

console.log(stringVal);

val = stringVal.indexOf('s');
console.log(val);
val = stringVal.lastIndexOf('s');
console.log(val);
val = stringVal.charAt('4');
console.log(val);
val = stringVal.charAt(stringVal.length - 1);
console.log(val);

val = stringVal.substring(0, 20); // end is non-inclusive; if no 
// end indicated goes to end of string
console.log(val);

val = stringVal.slice(0, 20);
console.log(val);
val = stringVal.slice(-10);
console.log(val);

val = 'tag1, tag2, tag3, tag4, tag5';
val = val.split(', ');
console.log(val);

val = stringVal.replace('material', 'string');

console.log(val);

val = stringVal.includes('Humpty');
console.log(val);

// Template literals - introduced in ES6
const name = 'Joe';
const age = 30;
const job = 'consigliere';
const city = 'New York';
let html;

// without template strings (es5)
html = '<ul><li>Name: ' + name + '</li><li>, etc.</li></ul>';

document.body.querySelector('#js-pad').innerHTML = html;

// with template literals
html = `<ul>
            <li>Name: ${name}</li>
            <li>, etc.</li>
        </ul>`

document.body.querySelector('#js-pad').innerHTML = html;

/* 
Arrays
*/
testArray = new Array();

for (var i = 0; i < 10; i++) {
    testArray[i] = i + 45;
}

console.log(testArray);

// testArray.unshift() // - adds on to the front.
// testArray.shift() // remove from the front
// testArray.splice();
// testArray.reverse();

testArray.sort(function(x, y){
    return x-y;
})

console.log(testArray);

// finding with specific criteria

function over50(num){
    return num > 50;
}


val = testArray.find(over50);

console.log(val);

/* 
OBJECT LITERAL
*/

person = {
    name: 'Harry',
    age: 11,
    address: {
        city: 'Little Whinging',
        state: 'Surrey'
    },
    getBirthYear: function(){
        return 2018 - this.age;
    }
}

/* 
Dates and Times
*/

let someDate = new Date('10 12 1999 12:23:15');
console.log(someDate);

someDate = new Date('October 12 1999 12:23:15');
console.log(someDate);

someDate = new Date('10/12/1999 12:23:15');
console.log(someDate);

let someDate2 = new Date();
console.log(someDate2);

val = someDate2.getMonth(); // starts off at 0, so each month is one less
console.log(val); 

someDate.getTime(); // gets the time since a set date
