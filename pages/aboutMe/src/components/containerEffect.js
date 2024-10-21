export class ContainerEffect {
    constructor(className) {
        this.element = document.querySelector(`.${className}`);
        this.rect = this.element.getBoundingClientRect();
    }

    init() {
        this.setupMouseMove();
    }

    setupMouseMove() {
        this.element.addEventListener("mousemove", (e) => {
            const xPosition = e.clientX / this.rect.left;
            const yPosition = e.clientY / this.rect.top;

            this.element.style.setProperty("--mouse-x", `${xPosition}px`);
            this.element.style.setProperty("--mouse-y", `${yPosition}px`);
        });
    }
}
