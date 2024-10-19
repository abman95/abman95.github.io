// services/initializeServices.js
import { ContainerEffect } from "../components/containerEffect.js";
import { ScrollService } from "./scrollService.js";
import { LinkService } from "./linkService.js";

export function initializeServices() {
    ["work1", "work2", "work3", "work4", "work5", "work6"].forEach(
        (className) => {
            const containerEffect = new ContainerEffect(className);
            containerEffect.init();
        },
    );

    const scrollService = new ScrollService();
    scrollService.init();

    const linkService = new LinkService();
    linkService.init();
}
