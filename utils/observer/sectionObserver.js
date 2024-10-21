import {
    addLetterHeadingContainer1,
    observerObserved,
} from "../languageSwitcher.js";
import { loadTranslations } from "../languageContentUpdater.js";

const projectOneDescription = document.querySelector(".projectOneDescription");
let personalIntroduction;

async function handleIntersection(entries) {
    personalIntroduction = await loadTranslations();
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (entry.target.id === "container2") {
                let chosenLanguage =
                    localStorage.getItem("chosenLanguage") || "English";

                observerObserved();

                setTimeout(() => {
                    projectOneDescription.classList.add("show");
                    addLetterHeadingContainer1(
                        personalIntroduction.personalIntroduction[
                            chosenLanguage
                        ],
                        false,
                        true,
                    );
                }, 1000);
            }
        }
    });
}

export const sectionElements = document.querySelectorAll(".container");

export const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.2,
});
