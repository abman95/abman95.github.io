export function setupClock() {
    const digitalTime = document.querySelector("#digitalTime");

    function getTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");

        digitalTime.textContent = `${hours} : ${minutes} : ${seconds} Uhr`;
    }

    setInterval(getTime, 1000);
}
