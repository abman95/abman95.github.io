import { changeLanguage as mobileMenuChangeLanguage } from "../src/components/navigation/mobileMenu.js";
import { chosenLanguageUpdater } from "../src/components/easteregg/interactiveLanguageDialog.js";
import { PROJECT_HEADERS } from "../src/content/projectContent.js";
import { getProjectHeader } from "../src/content/projectContent.js";
import {
    updateEnglishContent,
    updateGermanContent,
} from "./languageContentUpdater.js";

let chosenLanguage;

const elements = {
    languageEnglish: document.querySelector(".languageEnglish"),
    languageGerman: document.querySelector(".languageGerman"),
};

function setLanguage(lang) {
    localStorage.setItem("chosenLanguage", lang);
    updateContent(lang);
}

function updateContent(lang) {
    if (lang === "English") {
        updateEnglishContent();
        chosenLanguageUpdater(lang);
        mobileMenuChangeLanguage(lang);
    } else if (lang === "German") {
        updateGermanContent();
        chosenLanguageUpdater(lang);
        mobileMenuChangeLanguage(lang);
    }
}

export function requireCurrentLanguage() {
    const savedLanguage = localStorage.getItem("chosenLanguage") || "English";
    return savedLanguage;
}

const projectOneDescription = document.querySelector(".projectOneDescription");
let i = 0;
let currentTimeout;
let isObserved = false;

export function observerObserved() {
    isObserved = true;
}

export function addLetterHeadingContainer1(
    extendedDescription,
    callback = false,
    isObServer = false,
) {
    if (!isObServer && !isObserved) {
        return;
    }
    if (callback) {
        clearTimeout(currentTimeout);
        projectOneDescription.textContent = "";
        i = 0;
    }
    return new Promise((resolve) => {
        if (i < extendedDescription.length) {
            projectOneDescription.textContent += extendedDescription[i];
            i++;
            currentTimeout = setTimeout(() => {
                addLetterHeadingContainer1(extendedDescription).then(resolve);
            }, 40);
        } else {
            resolve();
        }
    });
}

export function updateProjectDescription(selectedLanguage, className) {
    const projectDescriptions = selectedLanguage;
    const sliderHeader = document.querySelector("#projectImageSlider1Header");
    const descriptionElement = document.querySelector(
        ".projectImageSlider2ImagesProjectDescription",
    );

    if (className) {
        const projectKeys = PROJECT_HEADERS[className];
        sliderHeader.textContent = projectKeys;
    }

    if (sliderHeader && descriptionElement) {
        const headerText = sliderHeader.textContent.trim();
        const projectKey = getProjectHeader(headerText);

        if (projectKey && projectDescriptions[projectKey]) {
            descriptionElement.textContent = projectDescriptions[projectKey];
        }
    }
}

elements.languageEnglish.addEventListener("click", () =>
    setLanguage("English"),
);
elements.languageGerman.addEventListener("click", () => setLanguage("German"));

document.addEventListener("DOMContentLoaded", () => {
    chosenLanguage = localStorage.getItem("chosenLanguage") || "English";
    updateContent(chosenLanguage);
});
