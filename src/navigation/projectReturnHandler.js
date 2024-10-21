// Handles the return navigation from project pages to portfolio
import { projectPages } from "../content/projectContent.js";

let projectName;
export const initializeProjectReturn = () => {
    let projectName =
        localStorage.getItem("projectNameReturnPortfolioSite") || null;
    const returnButton = document.querySelector(".returnPortfolioSite");

    if (!returnButton) return;

    returnButton.addEventListener("click", () => {
        projectName = determineCurrentProject();
        localStorage.setItem("projectNameReturnPortfolioSite", projectName);
        navigateToPortfolio();
    });
};

const determineCurrentProject = () => {
    for (const [page, projectName] of Object.entries(projectPages)) {
        if (window.location.href.includes(page)) {
            return projectName;
        }
    }
    return null;
};

const navigateToPortfolio = () => {
    const link = document.createElement("a");
    link.href =
        "http://abman95.github.io/homepage.html#projectImageSlider1Header";
    link.click();
};

export function returnHomepageButton() {
    projectName = determineCurrentProject();
    localStorage.setItem("projectNameReturnPortfolioSite", projectName);
    navigateToPortfolio();
}
