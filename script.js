let hourss = document.getElementById("hourss");
let minutess = document.getElementById("minutess");
let secondss = document.getElementById("secondss");
let msecondss = document.getElementById("msecondss");
let startTime = 0;
let elapsedTime = 0;
let timer = null;
let startTimes = 0;
isRunning = false;
let storeTime;
let stops = document.getElementById("myStop");

document.getElementById("myStart").onclick = function start() {
  if (!isRunning) {
    startTime = Date.now();
    timer = setInterval(update, 10);
    isRunning = true;
  }
};
document.getElementById("myReset").onclick = function reset() {
  elapsedTime = 0;
  clearInterval(timer);
  hourss.textContent = `00:`;
  minutess.textContent = `00:`;
  secondss.textContent = `00:`;
  msecondss.textContent = `00`;
  isRunning = false;
  stops.textContent = "Stop";
};

document.getElementById("myStop").onclick = function stop() {
  if (stops.textContent == "Stop" && isRunning) {
    clearInterval(timer);

    stops.textContent = "Resume";
  } else if (stops.textContent == "Resume" && isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);

    stops.textContent = "Stop";
  }
};

function update() {
  let currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  let hour = Math.floor(elapsedTime / (1000 * 60 * 60))
    .toString()
    .padStart(2, 0);
  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60)
    .toString()
    .padStart(2, 0);
  let seconds = Math.floor((elapsedTime / 1000) % 60)
    .toString()
    .padStart(2, 0);
  let miliseconds = Math.floor((elapsedTime % 1000) / 10)
    .toString()
    .padStart(2, 0);
  hourss.textContent = `${hour}:`;
  minutess.textContent = `${minutes}:`;
  secondss.textContent = `${seconds}:`;
  msecondss.textContent = ` ${miliseconds}`;
}
