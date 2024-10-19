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

document.addEventListener("DOMContentLoaded", function () {
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

    sekundenElement.textContent = ziffernNull(sekunden);
    minutenElement.textContent = ziffernNull(minuten);
    millisekundenElement.textContent = ziffernMilli(millisekunden);
});
