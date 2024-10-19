import {
    addLetterHeadingContainer1,
    observerObserved,
} from "../languageSwitcher.js";
import { personalIntroduction } from "../languageContentUpdater.js";

const projectOneDescription = document.querySelector(".projectOneDescription");

function handleIntersection(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (entry.target.id === "container2") {
                let chosenLanguage = localStorage.getItem("chosenLanguage");

                observerObserved();

                setTimeout(() => {
                    projectOneDescription.classList.add("show");
                    addLetterHeadingContainer1(
                        personalIntroduction[chosenLanguage],
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
