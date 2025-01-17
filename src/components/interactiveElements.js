export function initializeInteractiveElements(array) {
    let elements = array;

    elements.forEach((className) => addInteractiveAnimation(className));
}

function addInteractiveAnimation(className) {
    const element = document.querySelector(`.${className}`);
    let rect, centerX, centerY, moveX, moveY;

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseout", handleMouseOut);

    function handleMouseMove(e) {
        rect = element.getBoundingClientRect();
        centerX = rect.left + rect.width / 2;
        centerY = rect.top + rect.height / 2;

        moveX = e.clientX - centerX;
        moveY = e.clientY - centerY;

        element.style.transition = "transform 0.3s ease";
        element.style.transform = `translate(${moveX * 0.5}px, ${moveY * 0.5}px)`;
    }

    function handleMouseOut() {
        element.style.transition =
            "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)";
        element.style.transform = `translate(${moveX * -0.5 * 0.5}px, ${moveY * -0.5 * 0.5}px)`;
        setTimeout(() => {
            element.style.transition =
                "transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55)";
            element.style.transform = "translate(0, 0)";
        }, 200);
    }
}
