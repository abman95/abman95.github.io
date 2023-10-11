const text = "Der morgendliche Sonnenaufgang taucht die Landschaft in warmes Licht. Vögel zwitschern fröhlich ihr Lied, während der Duft frischer Blumen in der Luft liegt. Eine sanfte Brise streicht über die grüne Wiese, während sich Tiere im Wald leise bewegen. Ein klarer Bach plätschert friedlich dahin, während sich das Wasser um Steine schlängelt. Im Wald ragen majestätische Bäume empor und spenden wohltuenden Schatten. Eine Vielfalt von Farben schmückt die Blumenpracht entlang des Weges. Auf einem Hügel erblickt man ein idyllisches Dorf mit kleinen, gepflegten Häusern. Kinder spielen fröhlich auf dem Spielplatz und lachen ausgelassen. In der Ferne erstrecken sich malerische Berge und laden zum Wandern ein. Ein gemütliches Café bietet leckeren Kaffee und frischgebackene Torten an. Eine alte Kirche mit ihrem imposanten Turm zieht die Blicke auf sich. Der Markt lockt mit frischen Produkten und exotischen Gewürzen. Am Abend versinkt die Sonne langsam am Horizont und taucht den Himmel in ein Farbenspiel. Sterne funkeln am Nachthimmel und ein leises Rauschen des Windes begleitet die Stille der Nacht. Die Natur ist eine unerschöpfliche Quelle der Schönheit und des Friedens.";

const textEingabe = document.getElementById("textEingabe");
const textFeld = document.getElementById("textGenerator");
const richtigeAntwort = document.getElementById("notification");
textFeld.disabled = true;

const textArray = text.split(" ");

const randomText = Array.from({ length: 20 }, () => {
  const randomIndex = Math.floor(Math.random() * textArray.length);
  return textArray[randomIndex];
}).join(" ");

textEingabe.value = null;
textFeld.value = randomText;
const randomTextGesplittet = randomText.split("");

// Schleife zur Erstellung der <span>-Elemente für den Text im textFeld
randomTextGesplittet.forEach(function(element) {
  const createSpanTextFeld = document.createElement("span");
  createSpanTextFeld.innerText = element;
  textFeld.appendChild(createSpanTextFeld);
});

const textFeldSpans = Array.from(textFeld.getElementsByTagName("span"));




textEingabe.addEventListener("input", function() {
  checkEingabe();
  if (!intervalID) { // Überprüfen, ob der Timer bereits läuft
    startTimer();
  }
});



function checkEingabe() {
  const arrayTextEingabe = textEingabe.value.split("");

  textFeldSpans.forEach((charakterSpan, index) => {
    const charakter = arrayTextEingabe[index];

    if (charakter === charakterSpan.innerText) {
      charakterSpan.classList.remove("incorrect");
      charakterSpan.classList.add("correct");
      if (textFeld.value === textEingabe.value) {
        richtigeAntwort.textContent = `Richtig eingegeben! Du hast ${(-1)*(seconds - 60)} Sekunden gebraucht.`;
        clearInterval(intervalID);
        textEingabe.disabled = true;
    }} else if (charakter !== charakterSpan.innerText){
      charakterSpan.classList.remove("correct");
      charakterSpan.classList.add("incorrect");
      if (
        textEingabe.value.length === textFeld.value.length &&
        textEingabe.value !== textFeld.value || textEingabe.value.length > textFeld.value.length
      ) {
        textFeld.style.backgroundColor = "red";
        document.getElementById("notification").textContent = ""; // Benachrichtigung ausblenden
      } else {
        textFeld.style.backgroundColor = ""; // Hintergrund auf Standardwert zurücksetzen
        document.getElementById("notification").textContent = ""; // Benachrichtigung ausblenden
      }
      }
 } 
)};




let intervalID;
let seconds = 60;
timer.innerHTML = seconds;

function startTimer() {
const timer = document.getElementById("timer");
timer.innerHTML = seconds;
intervalID = setInterval(function() {
  if (seconds !== 0 && intervalID !== null) {
    seconds--;
    timer.innerHTML = seconds; // Die Anzeige der Sekundenzahl aktualisieren
  } else if (seconds === 0) {
    if (richtigeAntwort.textContent === "") {
      alert("Die Zeit ist abgelaufen");
    }
    clearInterval(intervalID);
    intervalID = null;
  }
}, 1000);
}

const copyMe = document.getElementById("copyMe");
copyMe.addEventListener("click", () => {
  const textToCopy = textFeld.value;
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      console.log("Text erfolgreich in die Zwischenablage kopiert:", textToCopy);
    })
    .catch((error) => {
      console.error("Fehler beim Kopieren des Textes:", error);
    });
});
