// Get references to HTML elements
const timeDisplayElement = document.querySelector('.watch .time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

// Initialize variables
let totalSeconds = 0;
let intervalId = null;

// Event listeners
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

// Timer function to update the time display
function updateTimerDisplay() {
    totalSeconds++;

    // Format time
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
    let seconds = totalSeconds % 60;

    // Add leading zeros for single-digit values
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Update the time display
    timeDisplayElement.innerHTML = `${hours}:${minutes}:${seconds}`;
}

// Start function to begin the timer
function startTimer() {
    // Check if the timer is already running
    if (intervalId) {
        return;
    }

    // Start the timer and update every second
    intervalId = setInterval(updateTimerDisplay, 1000);
}

// Stop function to pause the timer
function stopTimer() {
    // Clear the interval to stop the timer
    clearInterval(intervalId);
    intervalId = null;
}

// Reset function to reset the timer to 00:00:00
function resetTimer() {
    // Stop the timer, reset the seconds, and update the display
    stopTimer();
    totalSeconds = 0;
    timeDisplayElement.innerHTML = '00:00:00';
}