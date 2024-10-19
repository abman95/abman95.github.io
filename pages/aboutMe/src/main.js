// main.js
import { initializeServices } from "./services/initializeServices.js";
import { setupEventListeners } from "./utils/eventSetup.js";
import { setupClock } from "../../../src/services/clock.js";
import { initializeHeaderAnimation } from "../../../src/components/headerAnimation.js";
import { initializeMobileMenu } from "../../../src/components/navigation/mobileMenu.js";
import { initializeInteractiveElements } from "../../../src/components/interactiveElements.js";

document.addEventListener("DOMContentLoaded", () => {
    document.body.style.overflowX = "hidden";
    initializeServices();
    setupEventListeners();
    setupClock();
    initializeHeaderAnimation();
    initializeMobileMenu();
    initializeInteractiveElements([
        "portfolioIcon",
        "headerAboutMe",
        "headerHome",
        "headerContact",
        "headerLanguageButton",
        "abdullahfooterIcon",
        "headerFixedBackground",
    ]);
});
