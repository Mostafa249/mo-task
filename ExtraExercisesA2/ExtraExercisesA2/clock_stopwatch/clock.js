"use strict";
const $ = selector => document.querySelector(selector);

const padSingleDigit = num => num.toString().padStart(2, "0");

const displayCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    let ampm = "AM"; // set default value

    // correct hours and AM/PM value for display
    if (hours > 12) { // convert from military time
        hours = hours - 12;
        ampm = "PM";
    } else { // adjust 12 noon and 12 midnight
        switch (hours) {
            case 12: // noon
                ampm = "PM";
                break;
            case 0:  // midnight
                hours = 12;
                ampm = "AM";
        }
    }

    $("#hours").textContent = hours;
    $("#minutes").textContent = padSingleDigit(now.getMinutes());
    $("#seconds").textContent = padSingleDigit(now.getSeconds());
    $("#ampm").textContent = ampm;
};


//global stop watch timer variable and elapsed time object
let stopwatchTimer = null;
let elapsedMinutes = 0;
let elapsedSeconds = 0;
let elapsedMilliseconds = 0;
let incMilliSeconds = null
let incSeconds = null
let incMinutes = null
const tickStopwatch = () => {
    // increment milliseconds by 10 milliseconds
    incMilliSeconds = setInterval(() => {
        elapsedMilliseconds += 10
        if (elapsedMilliseconds > 999) {
            elapsedMilliseconds = 0
        }
        $('#s_ms').textContent = elapsedMilliseconds
    }, 10)
    // if milliseconds total 1000, increment seconds by one and reset milliseconds to zero
    incSeconds = setInterval(() => {
        elapsedSeconds += 1
        if (elapsedSeconds > 59) {
            elapsedSeconds = 0
        }
        $('#s_seconds').textContent = elapsedSeconds
    }, 1000)

    // if seconds total 60, increment minutes by one and reset seconds to zero
    incMinutes = setInterval(() => {
        elapsedMinutes += 1
        $('#s_minutes').textContent = elapsedMinutes
    }, 60000)

    //display newstopwatch time
};

// event handler functions
const startStopwatch = evt => {
    // prevent default action of link
    evt.preventDefault()
    tickStopwatch()
    // do first tick of stop watch and then set interval timer to tick 
    // stop watch every 10 milliseconds. Store timer object in stopwatchTimer 
    // variable so next two functions can stop timer.

};

const stopStopwatch = evt => {
    // prevent default action of link
    evt.preventDefault()
    clearInterval(incMilliSeconds)
    clearInterval(incSeconds)
    clearInterval(incMinutes)
    // stop timer

};

const resetStopwatch = evt => {
    // prevent default action of link
    evt.preventDefault()
    // stop timer
    clearInterval(incMilliSeconds)
    clearInterval(incSeconds)
    clearInterval(incMinutes)
    // reset elapsed variables and clear stopwatch display
    elapsedMinutes = 0
    elapsedSeconds = 0
    elapsedMilliseconds = 0
    $('#s_ms').textContent = elapsedMilliseconds
    $('#s_seconds').textContent = elapsedSeconds
    $('#s_minutes').textContent = elapsedMinutes
};

document.addEventListener("DOMContentLoaded", () => {
    // set initial clock display and then set interval timer to display
    // new time every second. Don't store timer object because it 
    // won't be needed - clock will just run.
    displayCurrentTime();
    setInterval(displayCurrentTime, 1000);
    // set up stopwatch event handlers
    $('#start').onclick = startStopwatch
    $('#stop').onclick = stopStopwatch
    $('#reset').onclick = resetStopwatch
});
