// File: src/js/main.js
import { initializeHeaderAnimation } from "./components/headerAnimation.js";
import { initializeMobileMenu } from "./components/navigation/mobileMenu.js";
import { initializeInteractiveElements } from "./components/interactiveElements.js";
import { initializeImageSlider } from "./components/sliders/imageSlider.js";
import { initializeProjectModal } from "./components/modals/projectModal.js";
import { setupClock } from "./services/clock.js";
import { initializeProjectReturn } from "./navigation/projectReturnHandler.js";
import {
    ProjectSlider,
    initializeProjectSlider,
} from "./components/sliders/projectSlider.js";
import { addInteractiveAnimationOnLocatedInGermany } from "./components/easteregg/interactiveLanguageDialog.js";
import {
    sectionElements,
    observer,
} from "../utils/observer/sectionObserver.js";

class PortfolioApp {
    constructor() {
        this.projectSlider = new ProjectSlider();
        this.initialize();
    }

    initialize() {
        initializeProjectReturn();
        this.setupProjectNavigation();
    }

    setupProjectNavigation() {
        document.addEventListener("DOMContentLoaded", () => {
            if (window.location.hash === "#projectImageSlider1Header") {
                const projectName = localStorage.getItem(
                    "projectNameReturnPortfolioSite",
                );
                if (projectName) {
                    this.projectSlider.updateProjectContent(projectName);
                }
            }
        });
    }
}

new PortfolioApp();

document.addEventListener("DOMContentLoaded", () => {
    document.body.style.overflowX = "hidden";
    document.addEventListener("scroll", () => {
        document.body.style.overflowX = "hidden";
    });

    initializeHeaderAnimation();
    initializeMobileMenu();
    initializeInteractiveElements([
        "portfolioIcon",
        "headerAboutMe",
        "headerHome",
        "headerContact",
        "headerLanguageButton",
        "jobDegreeText",
        "aboutMeButton",
        "abdullahfooterIcon",
        "headerFixedBackground",
    ]);
    initializeProjectSlider();
    initializeImageSlider();
    initializeProjectModal();
    setupClock();
    addInteractiveAnimationOnLocatedInGermany();
    sectionElements.forEach((section) => {
        observer.observe(section);
    });
});
