import { initializeProjectReturn } from "../../src/navigation/projectReturnHandler.js";
import { ProjectSlider } from "../../src/components/sliders/projectSlider.js";

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
                    this.projectSlider.updateSlider(projectName);
                }
            }
        });
    }
}

new PortfolioApp();
