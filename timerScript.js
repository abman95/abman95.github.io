/* let intervalId; // Variable auf globaler Ebene definieren
let sekunden = 0;
let minuten = 0;

function ziffernNull(zahl) {
  if (zahl < 10) {
    return "0" + zahl;
  }
  return zahl.toString();
}

function aktualisieren() {
  if (sekunden >= 60) {
    sekunden = 0;
    minuten++;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const stop = document.getElementById("stoppen");
  const weiter = document.getElementById("weiter");
  const clear = document.getElementById("clear");

  const minutenElement = document.getElementById("minuten");
  const sekundenElement = document.getElementById("sekunden");

  function timer() {
    sekunden++;
    aktualisieren();

    sekundenElement.textContent = ziffernNull(sekunden);
    minutenElement.textContent = ziffernNull(minuten);
  }

  function startTimer() {
    intervalId = setInterval(timer, 1000);
  }

  function stopTimer() {
    clearInterval(intervalId);
  }

  function clearTimer() {
    sekunden = 0;
    minuten = 0;
    sekundenElement.textContent = ziffernNull(sekunden);
    minutenElement.textContent = ziffernNull(minuten);
  }

  stop.addEventListener("click", stopTimer);
  weiter.addEventListener("click", startTimer);
  clear.addEventListener("click", clearTimer);

  // Anfangsanzeige aktualisieren
  sekundenElement.textContent = ziffernNull(sekunden);
  minutenElement.textContent = ziffernNull(minuten);

});

*/


let intervalId;
let sekunden = 0;
let minuten = 0;
let millisekunden = 0;

function ziffernNull(zahl) {
  return zahl < 10 ? "0" + zahl : zahl.toString();
}

function ziffernMilli(zahl) {
    return zahl < 100 ? zahl + "0" : zahl.toString();
  }
  



function aktualisieren() {
  if (millisekunden >= 1000) {
    millisekunden = 0;
    sekunden++;
  }
  if (sekunden >= 60) {
    sekunden = 0;
    minuten++;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const minutenElement = document.getElementById("minuten");
  const sekundenElement = document.getElementById("sekunden");
  const millisekundenElement = document.getElementById("millisekunden");

  function timer() {
    millisekunden += 10;
    aktualisieren();

    sekundenElement.textContent = ziffernNull(sekunden);
    minutenElement.textContent = ziffernNull(minuten);
    millisekundenElement.textContent = ziffernMilli(millisekunden);
  }

  function startTimer() {
    if (millisekunden !== 0) {
    clearInterval(intervalId);
    }
    intervalId = setInterval(timer, 10);
  }

  function stopTimer() {
    clearInterval(intervalId);
  }

  function clearTimer() {
    clearInterval(intervalId);
    sekunden = 0;
    minuten = 0;
    millisekunden = 0;
    sekundenElement.textContent = ziffernNull(sekunden);
    minutenElement.textContent = ziffernNull(minuten);
    millisekundenElement.textContent = ziffernMilli(millisekunden);
  }

  document.getElementById("stoppen").addEventListener("click", stopTimer);
  document.getElementById("weiter").addEventListener("click", startTimer);
  document.getElementById("clear").addEventListener("click", clearTimer);

  // Anfangsanzeige aktualisieren
  sekundenElement.textContent = ziffernNull(sekunden);
  minutenElement.textContent = ziffernNull(minuten);
  millisekundenElement.textContent = ziffernMilli(millisekunden);
});




/*let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.querySelector(".timer-display");
let int = null;

document.getElementById("start-timer").addEventListener("click", () => {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

document.getElementById("pause-timer").addEventListener("click", () => {
    clearInterval(int);
});

document.getElementById("reset-timer").addEventListener("click", () => {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timeRef.innerHTML = "00 : 00 : 00 : 000";
});

function displayTimer() {
    milliseconds += 10;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}*/
