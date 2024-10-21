import { setupClock } from "../../../src/services/clock.js";
import { initializeHeaderAnimation } from "../../../src/components/headerAnimation.js";
import { initializeMobileMenu } from "../../../src/components/navigation/mobileMenu.js";
import { initializeInteractiveElements } from "../../../src/components/interactiveElements.js";

document.addEventListener("DOMContentLoaded", () => {
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
        "submitButton",
        "headerFixedBackground",
    ]);
});
