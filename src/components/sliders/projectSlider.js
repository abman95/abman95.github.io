import { PROJECT_HEADERS } from "../../content/projectContent.js";
import { loadTranslations } from "../../../utils/languageContentUpdater.js";
import { updateProjectDescription } from "../../../utils/languageSwitcher.js";
import { getProjectHeader } from "../../content/projectContent.js";

let PROJECT_DESCRIPTIONS_EN;
let PROJECT_DESCRIPTIONS_DE;

export class ProjectSlider {
    constructor() {
        this.elements = {
            mainSlider: document.querySelector(".projectSlider"),
            container3: document.querySelector("#container3"),
            footer: document.querySelector("#footer"),
            projectImageSlider1: document.querySelector(".projectImageSlider1"),

            slider2: document.querySelector(".projectImageSlider2"),
            header: document.querySelector(".projectImageSlider1Header"),
            description: document.querySelector(
                ".projectImageSlider2ImagesProjectDescription",
            ),
            image1: document.querySelector("#projectImageSlider2Images1"),
            image2: document.querySelector("#projectImageSlider2Images2"),
            image3: document.querySelector("#projectImageSlider2Images3"),
            pseudoDiv: document.querySelector(
                "#projectImageSlider2ImagesAfterPseudoDiv",
            ),
        };

        this.initialize();
    }

    initialize() {
        document.addEventListener("scroll", () => this.handleScroll());

        this.setupProjectNavigation();
    }

    handleScroll() {
        const { container3, footer, mainSlider } = this.elements;
        const container3Rect = container3.getBoundingClientRect();
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const distanceFromTop = container3Rect.top;
        const distanceFromBottom1 = Math.min(1, distanceFromTop / 5);
        let container3ContentOpacity;

        if (container3Rect.top < -(windowHeight * 0.45)) {
            if (footerRect.top >= 600) {
                container3ContentOpacity =
                    -(container3Rect.top + windowHeight) / 250;
            }
        } else if (container3Rect.top >= -(windowHeight * 0.4)) {
            if (footerRect.top >= 600) {
                container3ContentOpacity =
                    -(container3Rect.top + windowHeight) / 2050;
            }
        }

        let scaledValue = distanceFromBottom1;

        if (distanceFromBottom1 <= 0) {
            if (footerRect.top >= 600) {
                mainSlider.style.transform = `scale(${scaledValue})`;
            }
            scaledValue = -distanceFromBottom1;
        }

        if (scaledValue > 100 || scaledValue < 100) {
            this.elements.projectImageSlider1.style.opacity = `${container3ContentOpacity}`;
            mainSlider.style.color = `black`;
        }

        if (footerRect.top >= 600) {
            mainSlider.style.transform = `scale(${scaledValue})`;
        }

        this.handleProjectSliderPosition();
    }

    handleProjectSliderPosition() {
        const { container3, mainSlider } = this.elements;
        const container3Rect = container3.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        container3.style.overflow = "hidden";
        mainSlider.style.overflow = "hidden";

        if (windowHeight * 0.4 >= container3Rect.top) {
            mainSlider.style.top = "40%";
            mainSlider.style.left = "0";
            mainSlider.style.right = "0";
            mainSlider.style.position = "fixed";
        } else if (windowHeight * 0.4 <= container3Rect.top) {
            mainSlider.style.position = "static";
        }
    }

    setupProjectNavigation() {
        document.addEventListener("DOMContentLoaded", () => {
            if (window.location.hash === "#projectImageSlider1Header") {
                const projectName = localStorage.getItem(
                    "projectNameReturnPortfolioSite",
                );
                if (projectName) {
                    this.updateProjectContent(projectName);
                }
            }
        });
    }

    updateProjectContent(projectName) {
        if (!this.validateElements()) return;

        const isMobile = window.innerWidth <= 450;
        const translateValue = isMobile ? "-90vw" : "-50vw";

        this.resetOpacity();
        this.updateImages(projectName);
        this.updateContent(projectName);
        this.updateSliderButtons();
        this.animateSlider(translateValue);
    }

    validateElements() {
        return Object.values(this.elements).every(
            (element) => element !== null,
        );
    }

    resetOpacity() {
        this.elements.image1.style.opacity = "0";
        this.elements.image2.style.opacity = "0";
    }

    requireCurrentLanguage() {
        const savedLanguage =
            localStorage.getItem("chosenLanguage") || "English";
        return savedLanguage;
    }

    updateImages(projectName) {
        this.elements.image1.src = `assets/images/projects/${projectName}/${projectName}Picture.png`;
        this.elements.image3.src = `assets/images/projects/${projectName}/${projectName}Picture1.png`;
    }

    async updateContent(projectName) {
        PROJECT_DESCRIPTIONS_EN = await loadTranslations();
        PROJECT_DESCRIPTIONS_DE = await loadTranslations();

        const currentLanguage = this.requireCurrentLanguage();
        this.elements.header.textContent = PROJECT_HEADERS[projectName];
        this.elements.description.textContent =
            currentLanguage === "English"
                ? PROJECT_DESCRIPTIONS_EN.PROJECT_DESCRIPTIONS_EN[projectName]
                : PROJECT_DESCRIPTIONS_DE.PROJECT_DESCRIPTIONS_DE[projectName];
    }

    updateSliderButtons() {
        const prevButton = document.querySelector(".prevButton");
        const nextButton = document.querySelector(".nextButton");

        prevButton.style.color = "wheat";
        nextButton.style.color = "rgba(198, 198, 198, 0.247)";
    }

    animateSlider(translateValue) {
        this.elements.slider2.style.transform = `translate(${translateValue}, 0%)`;
        this.elements.pseudoDiv.style.opacity = "1";
        this.elements.pseudoDiv.style.transform = "scale(1)";
    }
}

export function initializeProjectSlider() {
    return new ProjectSlider();
}

const projectImageSlider1Header = document.querySelector(
    ".projectImageSlider1Header",
);
const projectImageSlider2Images1 = document.querySelector(
    "#projectImageSlider2Images1",
);
const projectImageSlider2Images2 = document.querySelector(
    "#projectImageSlider2Images2",
);
const projectImageSlider2Images3 = document.querySelector(
    "#projectImageSlider2Images3",
);
const projectImageSlider2ImagesAfterPseudoDiv = document.querySelector(
    "#projectImageSlider2ImagesAfterPseudoDiv",
);
const projectImageSlider2 = document.querySelector(".projectImageSlider2");
let translateXInVw;

if (window.location.href.includes("/homepage.html")) {
    async function getProjectContent(className) {
        PROJECT_DESCRIPTIONS_EN = await loadTranslations();
        PROJECT_DESCRIPTIONS_DE = await loadTranslations();
        let chosenLanguage = new ProjectSlider().requireCurrentLanguage();
        if (!chosenLanguage) {
            chosenLanguage = "English";
        }

        if (chosenLanguage === "English") {
            updateProjectDescription(
                PROJECT_DESCRIPTIONS_EN.PROJECT_DESCRIPTIONS_EN,
                className,
            );
        } else {
            updateProjectDescription(
                PROJECT_DESCRIPTIONS_DE.PROJECT_DESCRIPTIONS_DE,
                className,
            );
        }
    }

    function updateProjectView(className) {
        getProjectContent(className);
        projectImageSlider2Images1.src = `assets/images/projects/${className}/${className}Picture.png`;
        projectImageSlider2Images3.src = `assets/images/projects/${className}/${className}Picture1.png`;
    }

    function handleProjectClick(className) {
        let computedStyle = window.getComputedStyle(projectImageSlider2);
        let transformValue = computedStyle.getPropertyValue("transform");
        const transformMatrix = new DOMMatrix(transformValue);
        const translateX = transformMatrix.m41;
        const viewportWidth = window.innerWidth;
        translateXInVw = Math.floor((translateX / viewportWidth) * 100);

        projectImageSlider2Images1.style.opacity = `0`;
        projectImageSlider2Images2.style.opacity = `0`;
        projectImageSlider2ImagesAfterPseudoDiv.style.opacity = `0`;
        projectImageSlider1Header.style.opacity = `0`;

        new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 700);
        }).then(() => {
            updateProjectView(className);
            setTimeout(() => {
                if (window.innerWidth <= 1150) {
                    if (translateXInVw > 85 && translateXInVw < 95) {
                        projectImageSlider2Images1.style.opacity = `1`;
                        projectImageSlider2Images2.style.opacity = `1`;
                        // projectImageSlider2Images3.style.opacity = `1`;
                        projectImageSlider2ImagesAfterPseudoDiv.style.opacity = `1`;
                    }
                    if (translateXInVw > -5 && translateXInVw < 5) {
                        projectImageSlider2Images2.style.opacity = `1`;
                        // projectImageSlider2Images3.style.opacity = `1`;
                        projectImageSlider2ImagesAfterPseudoDiv.style.opacity = `1`;
                    } else if (translateXInVw > -95 && translateXInVw < -85) {
                        // projectImageSlider2Images3.style.opacity = `1`;
                        projectImageSlider2ImagesAfterPseudoDiv.style.opacity = `1`;
                    }
                    projectImageSlider1Header.style.opacity = `1`;
                } else {
                    if (translateXInVw > 48 && translateXInVw < 52) {
                        projectImageSlider2Images1.style.opacity = "1";
                        projectImageSlider2Images2.style.opacity = "1";
                        projectImageSlider2ImagesAfterPseudoDiv.style.opacity =
                            "1";
                    } else if (translateXInVw > -2 && translateXInVw < 2) {
                        projectImageSlider2Images2.style.opacity = "1";
                        projectImageSlider2ImagesAfterPseudoDiv.style.opacity =
                            "1";
                    } else if (translateXInVw < -48 && translateXInVw > -52) {
                        projectImageSlider2ImagesAfterPseudoDiv.style.opacity =
                            "1";
                    }
                    projectImageSlider1Header.style.opacity = "1";
                }
            }, 700);
        });
    }

    projectImageSlider2ImagesAfterPseudoDiv.addEventListener(
        "click",
        function () {
            const projectName = getProjectHeader(
                projectImageSlider1Header.textContent,
            );
            const projectPath = `pages/projects/${projectName}/${projectName}Index.html`;
            const link = document.createElement("a");
            link.href = projectPath;
            link.click();
        },
    );

    function projectListSelector(className) {
        const element = document.querySelector(`.${className}`);
        element.addEventListener("click", () => handleProjectClick(className));
    }

    ["mp3", "typing", "toDo", "timer", "clock", "keyGen"].forEach(
        projectListSelector,
    );
}
