// set variables

// calculating the time that has passed in 2019
let startOfYear = new Date('01/01/2019'); // gives Tuesday, January 1st of 2019
let currentTime = Date.now();
let timeAtStartOfYear = startOfYear.getTime();
let timeElapsedInYear = currentTime - timeAtStartOfYear;
// let duration = new Date(timeElapsedInYear); // gives back duration as counted from Dec 31 1969; unnecessary
// let start = new Date(0);
// let daysPassedInYear = duration.getUTCHours - start.getUTCHours();
let daysPassedInYear = timeElapsedInYear / 1000 / 60 / 60 / 24;
let hoursPassedInYear = timeElapsedInYear / 1000 / 60 / 60;
let minutesPassedInYear = timeElapsedInYear / 1000 / 60;
let secondsPassedInYear = timeElapsedInYear / 1000;

// counter initialization
let secondsCounter = document.querySelector('.seconds-counter');
secondsCounter.textContent = Math.round(secondsPassedInYear);

let minutesCounter = document.querySelector('.minutes-counter');
minutesCounter.textContent = Math.round(minutesPassedInYear);


setInterval(() => {
    currentTime = Date.now();
    timeElapsedInYear = currentTime - timeAtStartOfYear;
    secondsPassedInYear = Math.round(timeElapsedInYear / 1000);
    secondsCounter.textContent = secondsPassedInYear;
}, 1000)

setInterval(() => {
    currentTime = Date.now();
    timeElapsedInYear = currentTime - timeAtStartOfYear;
    minutesPassedInYear = Math.round(timeElapsedInYear / 1000 / 60);
    minutesCounter.textContent = secondsPassedInYear;
}, 60000)