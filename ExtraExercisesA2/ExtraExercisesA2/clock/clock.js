"use strict";
const $ = selector => document.querySelector(selector);

const padSingleDigit = num => num.toString().padStart(2, "0");
console.log(padSingleDigit(2))
const displayCurrentTime = () => {
    let now = new Date();
    let hours = $("#hours");
    let minutes = $('#minutes')
    let seconds = $('#seconds')
    let ampm = $('#ampm')
    let am = 'AM'
    let h = now.getHours()
    if (now.getHours() > 12) {
        h = now.getHours() - 12
    }
    if(now.getHours() >= 12){
        am = 'PM'
    }
    ampm.textContent = am;
    hours.textContent = padSingleDigit(h);
    minutes.textContent = padSingleDigit(now.getMinutes());
    seconds.textContent = padSingleDigit(now.getSeconds());
    console.log(ampm);


};

document.addEventListener("DOMContentLoaded", () => {
    setInterval(displayCurrentTime,1000);

    // set initial clock display and then set interval timer to display
    // new time every second. Don't store timer object because it 
    // won't be needed - clock will just run.


});