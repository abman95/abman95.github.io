const sliders = document.querySelector(".projectImageSlider2");
const prevButton = document.querySelector(".prevButton");
const nextButton = document.querySelector(".nextButton");
let translateCount = 50;
let translateCountMobile = 90;

export function initializeImageSlider() {
    function initializeSliderPosition() {
        if (window.innerWidth <= 1150) {
            setTimeout(() => {
                setSliderPositionMobile();
            }, 1000);
        } else {
            setTimeout(() => {
                setSliderPositionDesktop();
            }, 1000);
        }
    }
    initializeSliderPosition();
    prevButton.addEventListener("click", prevImage);
    nextButton.addEventListener("click", nextImage);
}

function setSliderPositionMobile() {
    let translateXInVw = getTranslateX(sliders);
    if (
        translateXInVw < 0 &&
        translateXInVw > -91 &&
        window.location.hash === "#projectImageSlider1Header"
    ) {
        translateCountMobile = -90;
    }
}

function setSliderPositionDesktop() {
    let translateXInVw = getTranslateX(sliders);
    if (
        translateXInVw < 0 &&
        translateXInVw > -51 &&
        window.location.hash === "#projectImageSlider1Header"
    ) {
        translateCount = -50;
    }
}

function nextImage() {
    let translateXInVw = Math.floor(getTranslateX(sliders));
    if (window.innerWidth <= 1150) {
        handleNextImageMobile(translateXInVw);
    } else {
        handleNextImageDesktop(translateXInVw);
    }
}

function prevImage() {
    let translateXInVw = getTranslateX(sliders);
    if (window.innerWidth <= 1150) {
        handlePrevImageMobile(translateXInVw);
    } else {
        handlePrevImageDesktop(translateXInVw);
    }
}

function handleNextImageMobile(translateXInVw) {
    if (
        (translateXInVw > 85 && translateXInVw < 91) ||
        (translateXInVw > -5 && translateXInVw < 5)
    ) {
        animateButton(nextButton);
        translateCountMobile -= 90;
        sliders.style.transform = `translate(${translateCountMobile}vw, 0%)`;
        updateSliderOnNext(translateXInVw);
    }
}

function handleNextImageDesktop(translateXInVw) {
    if (
        (translateXInVw > 45 && translateXInVw < 51) ||
        (translateXInVw > -5 && translateXInVw < 5)
    ) {
        animateButton(nextButton);
        translateCount -= 50;
        sliders.style.transform = `translate(${translateCount}vw, 0%)`;
        updateSliderOnNext(translateXInVw);
    }
}

function handlePrevImageMobile(translateXInVw) {
    if (
        (translateXInVw < -85 && translateXInVw > -91) ||
        (translateXInVw > -5 && translateXInVw < 5)
    ) {
        animateButton(prevButton);
        translateCountMobile += 90;
        sliders.style.transform = `translate(${translateCountMobile}vw, 0%)`;
        updateSliderOnPrev(translateXInVw);
    }
}

function handlePrevImageDesktop(translateXInVw) {
    if (
        (translateXInVw < -45 && translateXInVw > -51) ||
        (translateXInVw > -5 && translateXInVw < 5)
    ) {
        animateButton(prevButton);
        translateCount += 50;
        sliders.style.transform = `translate(${translateCount}vw, 0%)`;
        updateSliderOnPrev(translateXInVw);
    }
}

function updateSliderOnNext(translateXInVw) {
    if (
        (window.innerWidth <= 1150 &&
            translateXInVw > 85 &&
            translateXInVw < 91) ||
        (window.innerWidth > 1150 && translateXInVw > 45 && translateXInVw < 51)
    ) {
        updateButtonStyles(prevButton, null);
        updateSliderChildren(sliders, 1, 0);
    } else if (translateXInVw > -5 && translateXInVw < 5) {
        updateSliderChildren(sliders, 2, 1);
        updateButtonStyles(null, nextButton);
    }
}

function updateSliderOnPrev(translateXInVw) {
    if (translateXInVw > -5 && translateXInVw < 5) {
        updateButtonStyles(null, prevButton);
        updateSliderChildren(sliders, 1, 0, 0.5, true);
    } else if (
        (window.innerWidth <= 1150 &&
            translateXInVw < -85 &&
            translateXInVw > -91) ||
        (window.innerWidth > 1150 &&
            translateXInVw < -45 &&
            translateXInVw > -51)
    ) {
        updateSliderChildren(sliders, 2, 1, 0.5, true);
        updateButtonStyles(nextButton, null);
    }
}

function getTranslateX(element) {
    let style = window.getComputedStyle(element);
    let matrix = new DOMMatrix(style.transform);
    return (matrix.m41 / window.innerWidth) * 100;
}

function animateButton(button) {
    button.style.transform = "scale(1.3)";
    setTimeout(() => {
        button.style.transform = "scale(1)";
    }, 200);
}

function updateButtonStyles(activeButton, inactiveButton) {
    if (activeButton) {
        activeButton.style.cursor = "pointer";
        activeButton.style.color = "wheat";
    }
    if (inactiveButton) {
        inactiveButton.style.cursor = "auto";
        inactiveButton.style.color = "rgba(198, 198, 198, 0.247)";
    }
}

function updateSliderChildren(
    slider,
    activeIndex,
    inactiveIndex,
    scale = 1,
    isPrevButton = false,
) {
    const [activeChild, inactiveChild] = isPrevButton
        ? [slider.children[inactiveIndex], slider.children[activeIndex]]
        : [slider.children[activeIndex], slider.children[inactiveIndex]];

    activeChild.style.opacity = "1";
    activeChild.style.transform = "scale(1)";

    inactiveChild.style.opacity = scale === 1 ? "0" : "0.5";
    inactiveChild.style.transform = `scale(${scale})`;
}
