const handleOnMouseMove = (e) => {
    const { currentTarget: nix } = e;

    const egal = nix.getBoundingClientRect(),
        x = e.clientX - egal.left,
        y = e.clientY - egal.top;

    nix.style.setProperty("--mouse-x", `${x}px`);
    nix.style.setProperty("--mouse-y", `${y}px`);
};

for (const container of document.querySelectorAll(".container")) {
    container.onmousemove = (e) => handleOnMouseMove(e);
}

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === "") {
        alert("Du musst eine Erinnernung verfassen");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener(
    "click",
    function (abgehakt) {
        if (abgehakt.target.tagName === "LI") {
            abgehakt.target.classList.toggle("checked");
            saveData();
        } else if (abgehakt.target.tagName === "SPAN") {
            abgehakt.target.parentElement.remove();
            saveData();
        }
    },
    false,
);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
