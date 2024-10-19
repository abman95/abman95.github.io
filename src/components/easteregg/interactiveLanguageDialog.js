import { easterEggTranslations } from "../../../utils/languageContentUpdater.js";

let chosenLanguage = localStorage.getItem("chosenLanguage");

export function chosenLanguageUpdater(languageUpdate) {
    chosenLanguage = languageUpdate;
}

export function addInteractiveAnimationOnLocatedInGermany() {
    const element = document.querySelector(".locatedInContainerBackground");
    const elementWidth = element.getBoundingClientRect().width;
    const maxOffsetX = elementWidth / 8;
    let isMouseDown = false;
    let startMouseX;
    let startElementX;
    let dontPullMeDialogCount = 0;

    const dontPullMeDialog = document.querySelector(".dontPullMeDialog");
    const dialogHeadline = document.querySelector(".dialogHeadline");
    const dontPullMeDialogCloseButton = document.querySelector(
        ".dontPullMeDialogCloseButton",
    );

    function setDialogContent(count) {
        if (count >= 5) return;

        const lang =
            chosenLanguage in easterEggTranslations
                ? chosenLanguage
                : "undefined";
        const content = easterEggTranslations[lang][count];

        if (count === 1 && window.innerWidth < 1150) {
            dialogHeadline.textContent =
                lang === "German"
                    ? easterEggTranslations["German"][0].headline
                    : easterEggTranslations["English"][0].headline;
        } else {
            dialogHeadline.textContent = content.headline;
        }

        dontPullMeDialogCloseButton.textContent = content.closeButton;
    }

    function handleMouseDown(e) {
        isMouseDown = true;
        startMouseX = e.clientX;
        startElementX = parseFloat(
            getComputedStyle(element).transform.split(",")[4] || 0,
        );
        element.style.transition = "none";
    }

    function handleMouseMove(e) {
        if (isMouseDown) {
            const moveX = e.clientX - startMouseX;
            let newElementX = Math.max(
                -maxOffsetX,
                Math.min(maxOffsetX, startElementX + moveX),
            );
            element.style.transform = `translate(${newElementX}px, 0px)`;
        }
    }

    function handleMouseUp() {
        if (isMouseDown) {
            isMouseDown = false;
            dontPullMeDialogCount++;
            element.style.transition =
                "transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55)";
            element.style.transform = "translate(0, 0)";

            setDialogContent(Math.min(dontPullMeDialogCount, 5));
            dontPullMeDialog.showModal();

            if (dontPullMeDialogCount === 3) {
                setTimeout(() => {
                    dontPullMeDialog.close();
                    const link = document.createElement("a");
                    link.href = "assets/cv/CV - Abdullah Sögüt.pdf";
                    link.target = "_blank";
                    link.click();
                }, 2000);
            } else if (dontPullMeDialogCount === 4) {
                setTimeout(() => {
                    const callingAbdullah = document.createElement("a");
                    callingAbdullah.href = "tel:01731905742";
                    callingAbdullah.click();
                    dontPullMeDialogCloseButton.textContent =
                        chosenLanguage === "German"
                            ? easterEggTranslations["German"][5].closeButton
                            : easterEggTranslations["English"][5].closeButton;
                }, 2000);
            }

            setTimeout(() => {
                element.style.transition = "";
            }, 300);
        }
    }

    element.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
}
