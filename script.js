let timer;
let isRunning = false;
let seconds = 0, minutes = 0, hours = 0;
let lapCounter = 1;

function updateTime() {
    seconds++;
    if (seconds == 60) { seconds = 0; minutes++; }
    if (minutes == 60) { minutes = 0; hours++; }
    document.getElementById("display").innerText = 
        (hours < 10 ? "0" + hours : hours) + ":" + 
        (minutes < 10 ? "0" + minutes : minutes) + ":" + 
        (seconds < 10 ? "0" + seconds : seconds);
}

function start() {
    if (!isRunning) {
        timer = setInterval(updateTime, 1000);
        isRunning = true;
    }
}

function pause() {
    clearInterval(timer);
    isRunning = false;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0; minutes = 0; hours = 0;
    document.getElementById("display").innerText = "00:00:00";
    document.getElementById("laps").innerHTML = "";
    lapCounter = 1;
}

function lap() {
    if (isRunning) {
        let lapTime = document.getElementById("display").innerText;
        let lapItem = document.createElement("li");
        lapItem.innerText = `Lap ${lapCounter}: ${lapTime}`;
        document.getElementById("laps").appendChild(lapItem);
        lapCounter++;
    }
}
