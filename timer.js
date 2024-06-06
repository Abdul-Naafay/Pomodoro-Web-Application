let timer;
let isRunning = false;
let remainingTime = 25 * 60; // 25 minutes in seconds

document.getElementById('minutes').addEventListener('change', updateRemainingTime);
document.getElementById('seconds').addEventListener('change', updateRemainingTime);

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    timer = setInterval(updateTimer, 1000);
}

function pauseTimer() {
    isRunning = false;
    clearInterval(timer);
}

function resetTimer() {
    isRunning = false;
    clearInterval(timer);
    remainingTime = 25 * 60;
    updateDisplay();
}

function playAlarm() {
    const alarmSound = document.getElementById('alarmSound');
    alarmSound.play();
}

function updateTimer() {
    if (remainingTime <= 0) {
        clearInterval(timer);
        playAlarm();
        alert("Time's up!");
        resetTimer();
        return;
    }
    remainingTime--;
    updateDisplay();
}

function updateDisplay() {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    document.getElementById('minutes').value = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').value = seconds.toString().padStart(2, '0');
}

function updateRemainingTime() {
    const minutes = parseInt(document.getElementById('minutes').value, 10) || 0;
    const seconds = parseInt(document.getElementById('seconds').value, 10) || 0;
    remainingTime = (minutes * 60) + seconds;
}

// Initialize display
updateDisplay();
