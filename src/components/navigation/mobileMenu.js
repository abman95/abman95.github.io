import { loadTranslations } from "../../../utils/languageContentUpdater.js";

let dialogTexts;

export function initializeMobileMenu() {
    const mobileMenuButton = document.querySelector(".mobileMenuButton");
    const headerFixedMenu = document.querySelector(".headerFixedMenu");
    const headerFixedBackground = document.querySelector(
        ".headerFixedBackground",
    );
    const dialogCloseButton = document.querySelector(".dialogCloseButton");
    const headerFixed = document.querySelector(".headerFixed");

    mobileMenuButton.addEventListener("click", openMobileMenu);
    headerFixedBackground.addEventListener("click", openMobileMenu);
    dialogCloseButton.addEventListener("click", closeMobileMenu);
    headerFixedMenu.addEventListener("click", handleOutsideClick);

    function openMobileMenu() {
        headerFixedMenu.showModal();
        document.body.style.overflow = "hidden";
    }

    function closeMobileMenu() {
        headerFixedMenu.classList.add("closed");
        setTimeout(() => {
            headerFixedBackground.style.transform = `translate(0px, 0px)`;
            headerFixedMenu.close();
            headerFixedMenu.classList.remove("closed");
            document.body.style.overflow = "auto";
            document.body.style.overflowX = "hidden";
            reverseAnimate();
        }, 300);
    }

    function handleOutsideClick(event) {
        const rect = headerFixedMenu.getBoundingClientRect();
        const isOutside =
            event.clientX < rect.left ||
            event.clientX >= rect.right ||
            event.clientY < rect.top ||
            event.clientY >= rect.bottom;

        if (isOutside) {
            closeMobileMenu();
        }
    }

    function reverseAnimate() {
        let elementAnimation = 0;
        let animationTimeout;

        function animate() {
            if (elementAnimation >= -20) {
                if (elementAnimation) {
                    headerFixed.style.transition = "filter ease .5s";
                    headerFixed.style.filter = "invert(0)";
                    headerFixedBackground.style.backgroundImage = `linear-gradient(to top, #1a1a1a ${elementAnimation}%, wheat 0%)`;
                }
                elementAnimation = elementAnimation - 3;
                animationTimeout = setTimeout(animate, 1);
            }
        }

        clearTimeout(animationTimeout);
        animate();
    }
}

let chosenLanguage = localStorage.getItem("chosenLanguage");

class DialogAnimator {
    constructor(className) {
        this.element = document.querySelector(`.${className}`);
        this.className = className;
        this.index = 0;
        this.text = "";
        this.animationDirection = "forward";
        this.animationTextTimeout = null;

        this.bindEvents();
    }

    bindEvents() {
        this.element.addEventListener("mousemove", () =>
            this.handleMouseEvent("forward", 0),
        );
        this.element.addEventListener("mouseenter", () =>
            this.handleMouseEvent("forward", 0),
        );
        this.element.addEventListener("mouseout", () =>
            this.handleMouseEvent("backward", 1),
        );
        this.element.addEventListener("mouseleave", () =>
            this.handleMouseEvent("backward", 1),
        );
    }

    async handleMouseEvent(direction, textIndex) {
        dialogTexts = await loadTranslations();

        this.animationDirection = direction;
        clearTimeout(this.animationTextTimeout);
        this.animateText(
            dialogTexts.dialogTexts[chosenLanguage][this.className][textIndex],
        );
    }

    animateText(targetText) {
        if (this.text !== targetText) {
            this.text = targetText;
            this.index = 0;
            this.element.textContent = "";
        }
        if (this.index < this.text.length) {
            this.element.textContent += this.text[this.index];
            this.index++;
            this.animationTextTimeout = setTimeout(
                () => this.animateText(targetText),
                100,
            );
        }
    }
}

export async function changeLanguage(newLanguage) {
    dialogTexts = await loadTranslations();
    if (dialogTexts.dialogTexts.hasOwnProperty(newLanguage)) {
        chosenLanguage = newLanguage;
        updateAllDialogs();
    } else {
        console.error(`Unsupported language: ${newLanguage}`);
    }
}

function updateAllDialogs() {
    dialogAnimators.forEach((animator) => {
        animator.handleMouseEvent("forward", 1);
    });
}

const dialogClasses = [
    "dialogHome",
    "dialogAboutMe",
    "dialogContact",
    "dialogLanguageButton",
    "languageEnglish",
    "languageGerman",
];
const dialogAnimators = dialogClasses.map(
    (className) => new DialogAnimator(className),
);

// DOM Elements
const elements = {
    headerLanguageButton: document.querySelector(".headerLanguageButton"),
    headerFixedMenuLanguage: document.querySelector(".headerFixedMenuLanguage"),
    dialogCloseButtonLanguage: document.querySelector(
        ".dialogCloseButtonLanguage",
    ),
    languageEnglish: document.querySelector(".languageEnglish"),
    languageGerman: document.querySelector(".languageGerman"),
    dialogLanguageButton: document.querySelector(".dialogLanguageButton"),
    headerFixedBackground: document.querySelector(".headerFixedBackground"),
};

// Functions
const showDialog = () => {
    elements.headerFixedMenuLanguage.showModal();
    document.body.style.overflow = "hidden";
};

const closeDialog = () => {
    elements.headerFixedMenuLanguage.classList.add("closed");
    resetBodyOverflow();
    setTimeout(() => {
        elements.headerFixedBackground.style.transform = "translate(0px, 0px)";
        elements.headerFixedMenuLanguage.close();
        elements.headerFixedMenuLanguage.classList.remove("closed");
        resetBodyOverflow();
    }, 300);
};

const resetBodyOverflow = () => {
    document.body.style.overflow = "auto";
    document.body.style.overflowX = "hidden";
};

const isClickOutside = (event, element) => {
    const rect = element.getBoundingClientRect();
    return (
        event.clientX < rect.left ||
        event.clientX >= rect.right ||
        event.clientY < rect.top ||
        event.clientY >= rect.bottom
    );
};

// Event Listeners
elements.dialogLanguageButton.addEventListener("click", showDialog);
elements.headerLanguageButton.addEventListener("click", showDialog);
elements.dialogCloseButtonLanguage.addEventListener("click", closeDialog);

elements.headerFixedMenuLanguage.addEventListener("click", (event) => {
    if (isClickOutside(event, elements.headerFixedMenuLanguage)) {
        closeDialog();
    }
});
