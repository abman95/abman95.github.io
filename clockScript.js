const secondsHand = document.getElementById("seconds-hand");
const minutesHand = document.getElementById("minutes-hand");
const hoursHand = document.getElementById("hours-hand");

function getTime() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
  
    const secondsDegrees = (seconds / 60) * 360;
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
  
    const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
  
    const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
  }
  
//Sorgt dafür, dass die Funktion jede Sekunde wieder neu ausgeführt wird
//und somit jede Sekunde der Uhrzeit neu erfasst und aktull dargestellt wird
setInterval(getTime, 1000);
