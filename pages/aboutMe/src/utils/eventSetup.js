export function setupEventListeners() {
    const container1 = document.querySelector(".container1Container");
    const fixedImage = document.querySelector(".fixed-image");

    setTimeout(() => {
        container1.classList.add("show");
        fixedImage.classList.add("show");
    }, 500);

    setupDegreeSlider("school");
    setupDegreeSlider("university");
}

function setupDegreeSlider(className) {
    const element = document.querySelector(`.${className}`);
    const elementLogo = document.querySelector(`.${className}Logo`);

    element.style.cursor = "pointer";

    element.addEventListener("click", () => {
        const degreeLink = document.createElement("a");
        const degreeLinkPath =
            className === "school"
                ? "https://www.307.schule.bremen.de/"
                : "https://www.uni-bremen.de/studium/orientieren-bewerben/studienangebot/dbs/study/37?cHash=f8eb16fab1eaff34019a0981e1a48214";

        degreeLink.href = degreeLinkPath;
        degreeLink.target = "_blank";
        degreeLink.click();
    });

    setupSliderAnimations(element, elementLogo);
}

function setupSliderAnimations(element, elementLogo) {
    const handleScroll = () => {
        const elementRect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const isVisible =
            elementRect.top < windowHeight / 2 &&
            elementRect.bottom > windowHeight / 2;

        updateSliderVisibility(element, elementLogo, isVisible);
    };

    element.addEventListener("mousemove", () => {
        updateSliderVisibility(element, elementLogo, true);
    });

    element.addEventListener("mouseout", () => {
        updateSliderVisibility(element, elementLogo, false);
    });

    if (window.innerWidth <= 450 || window.innerWidth >= 1250) {
        document.addEventListener("scroll", handleScroll);
    }
}

function updateSliderVisibility(element, elementLogo, isVisible) {
    elementLogo.style.opacity = isVisible ? "1" : "0";
    element.style.transition = "transform .7s ease";
    element.style.transform = isVisible
        ? "translateX(0vw)"
        : `translateX(${window.innerWidth > 450 && window.innerWidth <= 1250 ? -50.375 : -29.375}vw)`;
}
