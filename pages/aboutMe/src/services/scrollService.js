// services/scrollService.js
export class ScrollService {
    constructor() {
        this.elements = {
            aboutMe: {
                texts: Array.from({ length: 7 }, (_, i) =>
                    document.querySelector(
                        `.aboutMePageIntroductoryText${i || ""}`,
                    ),
                ),
                headers: Array.from({ length: 7 }, (_, i) =>
                    document.querySelector(
                        `.aboutMePageIntroductoryHeader${i || ""}`,
                    ),
                ),
                elements: Array.from({ length: 7 }, (_, i) =>
                    document.querySelector(
                        `.${["first", "second", "third", "fourth", "fifth", "sixth", "seventh"][i]}Element`,
                    ),
                ),
                lines: Array.from({ length: 7 }, (_, i) =>
                    document.querySelector(
                        `.${["first", "second", "third", "fourth", "fifth", "sixth", "seventh"][i]}ElementLine`,
                    ),
                ),
            },
        };
    }

    init() {
        this.setupScrollListener();
    }

    setupScrollListener() {
        document.addEventListener("scroll", () => {
            const windowHeight = window.innerHeight;

            this.elements.aboutMe.elements.forEach((element, index) => {
                const elementRect = element.getBoundingClientRect();
                this.updateElementVisibility(elementRect, windowHeight, index);
            });
        });
    }

    updateElementVisibility(elementRect, windowHeight, index) {
        const { texts, headers, elements, lines } = this.elements.aboutMe;
        const isVisible = windowHeight / 2 >= elementRect.top;

        if (isVisible) {
            lines[index].style.backgroundImage =
                `linear-gradient(black ${-1 * (elementRect.top - windowHeight / 2)}px, lightGrey 0%)`;
            headers[index].classList.add("show");
            texts[index].classList.add("show");
            elements[index].classList.add("show");
        } else {
            lines[index].style.backgroundImage =
                `linear-gradient(black ${-1 * (elementRect.top - windowHeight / 2)}px, lightGrey 0%)`;
            elements[index].classList.remove("show");
            headers[index].classList.remove("show");
            texts[index].classList.remove("show");
        }
    }
}
