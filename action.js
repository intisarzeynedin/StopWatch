
const counter = document.getElementById('counter');

let hour = 0;
let minute = 0;
let second = 0;
let timer = null;

function startCount() {
    second++;
    
    if (second == 60) {
        second = 0;
        minute++;
    }  
    if (minute == 60) {
        minute = 0;
        hour++;
    }

    let h = hour < 10 ? "0" + hour : hour;
    let m = minute < 10 ? "0" + minute : minute;
    let s = second < 10 ? "0" + second : second;
    
    // Update the innerHTML of the counter element with the formatted time
    counter.innerHTML = h + ":" + m + ":" + s;
}


function startTimer() {
    // If a timer is already running, clear it
    if (timer !== null) {
        clearInterval(timer);
    }
    // Set a new interval to call startCount every second (1000 milliseconds)
    timer = setInterval(startCount, 1000); // Fixed: Assign setInterval to timer
}

function stopTimer() {
    // Clear the current interval to stop the timer
    clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);

    hour = 0;
    minute = 0;
    second = 0;
    
    // Update the innerHTML of the counter element to show "00:00:00"
    counter.innerHTML = "00:00:00";
}
