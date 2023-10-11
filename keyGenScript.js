const handleOnMouseMove = e => {
  const { currentTarget: nix } = e;

  const egal = nix.getBoundingClientRect(),
      x = e.clientX - egal.left,
      y = e.clientY - egal.top;

  nix.style.setProperty("--mouse-x", `${x}px`);
  nix.style.setProperty("--mouse-y", `${y}px`);
}

for (const container of document.querySelectorAll(".container")) {
  container.onmousemove = e => handleOnMouseMove(e);
}

const keyLange = document.getElementById("keyLenght");
const keyOutput = document.getElementById("keyOutput");
const zahlenCode = "abcdefghijklmnopqrstuvwxyz1234567890";
const keykopiert = document.getElementById("kopiereKey");

function getPasswordLengths(laenge) {
    if (laenge === "KEY Länge von 12") {
        return 11;
    } else if (laenge === "KEY Länge von 11") {
        return 10;
    } else if (laenge === "KEY Länge von 10") {
        return 9;
    } else {
        return alert("Bitte wähle eine Länge aus!");
    }
}

function generateButton() { 
    let length = getPasswordLengths(keyLange.value);
    let pass = "";
    for (var i = 0; i < length; i++) {
        let genCode = Math.floor(Math.random() * zahlenCode.length);
        pass = pass + zahlenCode.substring(genCode, genCode + 1);
    }
    keyOutput.value = pass;
}

function copyKey() {
    const originalInnerHTML = keykopiert.innerHTML;
    keyOutput.select();
    document.execCommand("copy");
    keykopiert.innerHTML = "Kopiert!";
    keykopiert.classList.add("copied");
    keyOutput.blur();
  
    setTimeout(() => {
      keykopiert.innerHTML = originalInnerHTML;
      keykopiert.classList.remove("copied");
    }, 2000);
  }